import urllib.request
import json
import os
import csv
from datetime import datetime

PROJECT_ID = "homequik-clone"
FIRESTORE_URL = f"https://firestore.googleapis.com/v1/projects/{PROJECT_ID}/databases/(default)/documents"
GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbxcEHZaSWkogoxOp6PNL0VhLVTNw0X11YEDekRNmCFobqWhL5V4HfMaB9SKTay6DXkK/exec"

def fetch_firestore_collection(collection_name):
    url = f"{FIRESTORE_URL}/{collection_name}?pageSize=100"
    print(f"Fetching {collection_name} from Firestore REST API...")
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            documents = data.get("documents", [])
            
            parsed_docs = []
            for doc in documents:
                fields = doc.get("fields", {})
                parsed_doc = {"id": doc.get("name", "").split("/")[-1]}
                for key, val in fields.items():
                    # Parse firestore types (stringValue, integerValue, booleanValue, etc.)
                    if "stringValue" in val:
                        parsed_doc[key] = val["stringValue"]
                    elif "integerValue" in val:
                        parsed_doc[key] = int(val["integerValue"])
                    elif "booleanValue" in val:
                        parsed_doc[key] = val["booleanValue"]
                    elif "doubleValue" in val:
                        parsed_doc[key] = float(val["doubleValue"])
                    else:
                        parsed_doc[key] = str(val)
                parsed_docs.append(parsed_doc)
            return parsed_docs
    except Exception as e:
        print(f"Failed to fetch {collection_name}: {e}")
        return []

def fetch_google_sheets():
    print("Fetching Google Sheets data...")
    try:
        req = urllib.request.Request(GOOGLE_SHEET_URL, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            return data
    except Exception as e:
        print(f"Failed to fetch Google Sheets data: {e}")
        return []

def save_to_csv(data, filename, headers):
    if not data:
        print(f"No data to save for {filename}")
        return
    try:
        with open(filename, mode='w', newline='', encoding='utf-8') as f:
            writer = csv.DictWriter(f, fieldnames=headers, extrasaction='ignore')
            writer.writeheader()
            for row in data:
                writer.writerow(row)
        print(f"Saved report successfully to {filename}")
    except Exception as e:
        print(f"Failed to save CSV {filename}: {e}")

def main():
    print("Starting fast data fetching using Python...")
    
    # 1. Fetch Dealers
    dealers = fetch_firestore_collection("dealers")
    dealer_headers = ["id", "businessName", "ownerName", "phone", "city", "plan", "status", "paymentStatus"]
    save_to_csv(dealers, "Dealers_Report.csv", dealer_headers)
    
    # 2. Fetch Bookings (Customers)
    bookings = fetch_firestore_collection("bookings")
    booking_headers = ["bookingId", "customerName", "customerPhone", "customerAddress", "serviceName", "status", "amount", "paymentStatus", "bookingDate"]
    save_to_csv(bookings, "Bookings_Report.csv", booking_headers)
    
    # 3. Fetch Google Sheets (as backup or sync check)
    sheet_data = fetch_google_sheets()
    if isinstance(sheet_data, list):
        save_to_csv(sheet_data, "Google_Sheets_Sync_Report.csv", booking_headers)
    
    print("Fast fetching completed!")

if __name__ == "__main__":
    main()

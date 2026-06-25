export interface GeocodedAddress {
  fullAddress: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
}

/**
 * Reverse geocodes coordinates (latitude and longitude) using the OpenStreetMap Nominatim API.
 */
export async function reverseGeocodeNominatim(lat: number, lng: number): Promise<GeocodedAddress | null> {
  try {
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`;
    
    const response = await fetch(url, {
      headers: {
        "Accept-Language": "en-US,en;q=0.9",
        "User-Agent": "Vendor99-Precise-Locator/1.0 (contact: support@vendor99.com)"
      }
    });

    if (!response.ok) {
      console.warn("Nominatim reverse geocode failed with status:", response.status);
      return null;
    }

    const data = await response.json();
    if (!data || !data.address) {
      return null;
    }

    const address = data.address;
    
    // Extract and fallback city names based on OSM hierarchy
    const city = address.city || address.town || address.village || address.suburb || address.county || "";
    const state = address.state || address.state_district || "";
    const pincode = address.postcode || "";
    const country = address.country || "";
    const fullAddress = data.display_name || "";

    return {
      fullAddress,
      city,
      state,
      pincode,
      country
    };
  } catch (error) {
    console.error("Error in reverseGeocodeNominatim:", error);
    return null;
  }
}

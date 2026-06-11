from PIL import Image

def remove_white_bg(image_path):
    img = Image.open(image_path)
    img = img.convert("RGBA")
    datas = img.getdata()
    
    new_data = []
    for item in datas:
        # Check if the pixel is close to white
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    img.save(image_path, "PNG")

try:
    print("Processing homewell.png...")
    remove_white_bg(r"C:\Users\Banu Prakash\OneDrive\Desktop\homequik-clone\frontend\public\logos\homewell.png")
    print("Processing reboot.png...")
    remove_white_bg(r"C:\Users\Banu Prakash\OneDrive\Desktop\homequik-clone\frontend\public\logos\reboot.png")
    print("Done")
except Exception as e:
    print(f"Error: {e}")

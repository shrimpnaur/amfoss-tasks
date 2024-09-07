import os
import re
import cv2
import numpy as np
from PIL import Image, ImageDraw

def detect_dot(image_path):
    img = cv2.imread(image_path)
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    
    _, binary = cv2.threshold(gray, 240, 255, cv2.THRESH_BINARY_INV)
    
    contours, _ = cv2.findContours(binary, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    
    #finding contour
    if contours:
        cnt = contours[0]
        M = cv2.moments(cnt)
        if M["m00"] != 0:
            cx = int(M["m10"] / M["m00"]) #dot center logic
            cy = int(M["m01"] / M["m00"])
            
            #finding the dot color and converting bgr into rgb for pillow 
            dot_color_bgr = img[cy, cx]
            dot_color_rgb = tuple(reversed(dot_color_bgr))
            return (cx, cy), dot_color_rgb
    return None, None

def process_images(image_folder):
   
    all_files = os.listdir(image_folder)
    print(f"All files: {all_files}")  # debug

    # extract filenames
    image_files = [f for f in all_files if f.endswith('.png')]
    
#sorting
    def extract_number(filename):
        match = re.search(r'Layer (\d+)', filename)
        return int(match.group(1)) if match else float('inf')

    image_files.sort(key=extract_number)
    print(f"Filtered and sorted image files: {image_files}")  # debug 
    
    #check for blank picture
    if not image_files:
        print("blank picture.")
        return

    first_img_path = os.path.join(image_folder, image_files[0])
    first_img = Image.open(first_img_path)
    width, height = first_img.size
    output_img = Image.new("RGB", (width, height), "white")
    draw = ImageDraw.Draw(output_img)

    prev_dot = None
    prev_color = None
    
    for image_file in image_files:
        img_path = os.path.join(image_folder, image_file)
        dot, color = detect_dot(img_path)
        
        if dot:
            if prev_dot and prev_color:
                draw.line([prev_dot, dot], fill=tuple(prev_color), width=2)
            
            prev_dot = dot
            prev_color = color
        else:
            prev_dot = None
            prev_color = None
    
    output_img.save('output_image.png')

process_images('/home/shria-nair/Documents/Operation-Pixel-Merge/assets')

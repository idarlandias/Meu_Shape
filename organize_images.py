import os
import shutil

src_dir = "images_extracted"
dest_dir = "assets/images"

if not os.path.exists(dest_dir):
    os.makedirs(dest_dir)

# Images for Lower Body Stretching (from PDF pages 1-2)
lower_images = [
    "image_p001_01.jpeg",
    "image_p001_02.jpeg",
    "image_p001_03.jpeg",
    "image_p001_04.jpeg",
    "image_p001_05.png",
    "image_p001_06.png",
    "image_p001_07.png",
    "image_p002_01.jpeg",
    "image_p002_02.png",
    "image_p002_03.jpeg",
]

# Images for Upper Body Stretching (from PDF pages 3-4)
upper_images = [
    "image_p003_01.png",
    "image_p003_02.png",
    "image_p003_03.jpeg",
    "image_p003_04.png",
    "image_p003_05.png",
    "image_p003_06.jpeg",
    "image_p004_01.png",
    "image_p004_02.jpeg",
    "image_p004_03.png",
    "image_p004_04.png",
]

for img in lower_images:
    src_path = os.path.join(src_dir, img)
    dst_path = os.path.join(dest_dir, f"lower_{img}")
    if os.path.exists(src_path):
        shutil.copy(src_path, dst_path)

for img in upper_images:
    src_path = os.path.join(src_dir, img)
    dst_path = os.path.join(dest_dir, f"upper_{img}")
    if os.path.exists(src_path):
        shutil.copy(src_path, dst_path)

print("Images organized successfully!")

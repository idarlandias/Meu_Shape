import fitz  # PyMuPDF
import os

pdf_path = (
    "PLANILHA-DE-TREINO-EMAGRECIMENTO---INTERMEDIÁRIO-OUTUBRO-2025---planilha-nova.pdf"
)
output_dir = "images_extracted"

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

doc = fitz.open(pdf_path)

img_count = 0
for page_index in range(len(doc)):
    page = doc[page_index]
    image_list = page.get_images(full=True)

    if image_list:
        print(f"[+] Found a total of {len(image_list)} images in page {page_index}")
    else:
        print(f"[!] No images found on page {page_index}")

    for image_index, img in enumerate(image_list, start=1):
        xref = img[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image["image"]
        image_ext = base_image["ext"]

        # We can also get the position if needed, but for now let's just dump the images.
        image_filename = f"image_p{page_index:03d}_{image_index:02d}.{image_ext}"
        image_filepath = os.path.join(output_dir, image_filename)

        with open(image_filepath, "wb") as f:
            f.write(image_bytes)
        img_count += 1

print(f"Total images extracted: {img_count}")

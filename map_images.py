import fitz  # PyMuPDF
import os

pdf_path = (
    "PLANILHA-DE-TREINO-EMAGRECIMENTO---INTERMEDIÁRIO-OUTUBRO-2025---planilha-nova.pdf"
)
doc = fitz.open(pdf_path)

mapping = {}
for page_index in range(len(doc)):
    page = doc[page_index]
    text = page.get_text()

    # Simple logic to find which training day is on which page
    if "T R E I N O  A" in text:
        day = "A"
    elif "T R E I N O  B 1" in text:
        day = "B1"
    elif "T R E I N O  B 2" in text:
        day = "B2"
    elif "T R E I N O  B 3" in text:
        day = "B3"
    elif "T R E I N O  C . 1" in text:
        day = "C1"
    elif "T R E I N O  C . 2" in text:
        day = "C2"
    elif "T R E I N O  D" in text:
        day = "D"
    else:
        day = "Other"

    mapping[page_index] = day

for k, v in mapping.items():
    print(f"Page {k:02d}: {v}")

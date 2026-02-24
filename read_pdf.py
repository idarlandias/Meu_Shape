import sys
import subprocess

def install_and_import(package):
    try:
        __import__(package)
    except ImportError:
        subprocess.check_call([sys.executable, "-m", "pip", "install", package])

install_and_import('pymupdf')
import fitz  # PyMuPDF

pdf_path = "PLANILHA-DE-TREINO-EMAGRECIMENTO---INTERMEDIÁRIO-OUTUBRO-2025---planilha-nova.pdf"
doc = fitz.open(pdf_path)
text = ""
for page in doc:
    text += page.get_text()

with open("pdf_content.txt", "w", encoding="utf-8") as f:
    f.write(text)

print("Extraction complete. Text saved to pdf_content.txt")

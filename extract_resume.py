from pypdf import PdfReader

pdf_path = r"c:/Users/suraj/OneDrive/Desktop/Chand Portfolio/src/assets/Resume.pdf"
reader = PdfReader(pdf_path)
for i, page in enumerate(reader.pages, 1):
    print(f"--- PAGE {i} ---")
    print(page.extract_text() or "")

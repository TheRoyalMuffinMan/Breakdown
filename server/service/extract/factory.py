from service.extract import pdf, doc

class Extractor:
    def __init__(self, path):
        self.path = path
    
    def extract(self, ext):
        extractors = {
            "pdf": pdf.PDFExtractor,
            "doc": doc.DOCExtractor,
            "docx": doc.DOCExtractor,
        }
        return extractors[ext](self.path).extract()
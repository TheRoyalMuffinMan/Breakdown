import docx2txt

class DOCExtractor:
    def __init__(self, path):
        self.path = path
        
    def extract(self):
        doc = docx2txt.process(self.path)
        text = [line.replace('\t', ' ') for line in doc.split('\n') if line]
        return ' '.join(text)

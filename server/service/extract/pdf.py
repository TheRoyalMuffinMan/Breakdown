from pdfminer.converter import TextConverter
from pdfminer.pdfinterp import PDFPageInterpreter
from pdfminer.pdfinterp import PDFResourceManager
from pdfminer.layout import LAParams
from pdfminer.pdfpage import PDFPage
import io

class PDFExtractor:
    def __init__(self, path):
        self.path = path

    def extract(self):
        text = ""
        for page in self.__extractingForPDF(self.path):
            text += ' ' + page
        return text

    def __extractingForPDF(self, path):
        with open(path, 'rb') as fh:
            # iterate over all pages of PDF document
            for page in PDFPage.get_pages(fh, caching=True, check_extractable=False):
                # creating a resoure manager
                resourceManager = PDFResourceManager()
                
                # create a file handle
                fakeFileHandle = io.StringIO()
                
                # creating a text converter object
                converter = TextConverter(
                                    resourceManager, 
                                    fakeFileHandle, 
                                    laparams=LAParams()
                            )

                # creating a page interpreter
                pageInterpreter = PDFPageInterpreter(
                                    resourceManager, 
                                    converter
                                )

                # process current page
                pageInterpreter.process_page(page)
                
                # extract text
                text = fakeFileHandle.getvalue()
                yield text

                # close open handles
                converter.close()
                fakeFileHandle.close()
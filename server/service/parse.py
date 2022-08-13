# import os
# import PyPDF2

# FILE_DIR = os.path.dirname(os.path.realpath('__file__'))

# SKILLS_THRESOLD = {
#     "Java", "Python", "C/C++", "C", "C++", "Javascript", "HTML", "CSS",
# }

# class PDF:
#     def __init__(self, filename):
#         self.file = open(FILE_DIR + f'/app/tmp/{filename}', "rb")
#         self.reader = PyPDF2.PdfFileReader(self.file) 
#         for page in self.reader.pages:
#             print(page.extractText())

#     def skills(self):
#         pass

#     def specfic_rating(self):
#         pass

#     def rating(self):
#         pass
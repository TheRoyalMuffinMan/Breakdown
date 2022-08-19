from spacy.matcher import Matcher
import spacy
import re

class Parser:
    def __init__(self, text):
        # load pre-trained model
        self.nlp = spacy.load('en_core_web_sm')
        # initialize matcher with a vocab
        self.matcher = Matcher(self.nlp.vocab)
        self.text = text
    
    def getName(self):
        nlp_text = self.nlp(self.text)
    
        # First name and Last name are always Proper Nouns
        pattern = [{'POS': 'PROPN'}, {'POS': 'PROPN'}]
        
        self.matcher.add('NAME', [pattern])
        
        matches = self.matcher(nlp_text)
        
        for match_id, start, end in matches:
            span = nlp_text[start:end]
            return span.text
        
        return None

    def getNumber(self):
        phonePattern = re.compile(
            r'(?:(?:\+?([1-9]|[0-9][0-9]|[0-9][0-9][0-9])' +
            r'\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]' +
            r'1|[2-9][02-8][02-9])\s*\)|([0-9][1-9]|[0-9]1[02-9]|' +
            r'[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1' +
            r'[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4}' +
            r')(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?'
        )
        phone = re.findall(phonePattern, self.text)
        
        if phone:
            number = ''.join(phone[0])
            if len(number) > 10:
                return '+' + number
            else:
                return number
                
        return None

    def getEmail(self):
        emailPattern = re.compile(
            r'([^@|\s]+@[^@]+\.[^@|\s]+)'
        )
        email = re.findall(emailPattern, self.text)
        if email:
            try:
                return email[0].split()[0].strip(';')
            except IndexError:
                return None

        return None

    def getAllInfo(self):
        return {
            "name": self.getName(),
            "number": self.getNumber(),
            "email": self.getEmail()
        }
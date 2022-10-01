from pdfminer.high_level import extract_text
from keybert import KeyBERT


def extracttext(path):
    plaintext = extract_text(path)
    return plaintext


def getkeywords(text):
    kw_model = KeyBERT()
    keywords = kw_model.extract_keywords(text, keyphrase_ngram_range=(1, 3), stop_words=None)
    return keywords

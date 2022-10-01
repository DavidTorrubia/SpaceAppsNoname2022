from pdfminer.high_level import extract_text


# from keybert import KeyBERT

def extracttext(path):
    plaintext = extract_text(path)
    return plaintext

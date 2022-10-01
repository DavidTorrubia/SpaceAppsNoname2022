from flask import Flask
import extractText
import nltk

app = Flask(__name__)


@app.route('/')
def hello_world():  # put application's code here

    text = extractText.extracttext('..\\..\\a19740008397.pdf')
    kw = extractText.getkeywords(text)
    return kw


if __name__ == '__main__':
    app.run()

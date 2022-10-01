from urllib import response
from flask import Flask
from backend.searchScript import searchCoincidences
import extractText
import nltk
import searchScript
app = Flask(__name__)


@app.route('/')
def hello_world():  # put application's code here

    text = extractText.extracttext('..\\..\\a19740008397.pdf')
    kw = extractText.getkeywords(text)
    return kw


app.route('/api/v1/search/<param>', methods=['GET'])
def extracttoken(param):
    usertoken = searchScript.extractToken(param)
    coincidences = searchScript.searchCoincidences(usertoken)
    return coincidences

if __name__ == '__main__':
    app.run()

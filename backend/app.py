from urllib import response
from flask import Flask
from searchScript import searchCoincidences
from flask import jsonify
from flask import request
import extractText
import nltk
import searchScript
app = Flask(__name__)

@app.route('/api/search', methods=['POST'])
def search():
    content = request.get_json()
    # usertoken = searchScript.extractToken(param)
    # coincidences = searchScript.searchCoincidences(usertoken)
    return jsonify(content)

@app.route('/')
def hello_world():  # put application's code here
    text = "" #extractText.extracttext('..\\..\\a19740008397.pdf')
    kw = extractText.getkeywords(text)
    return kw

@app.route('/api/v1/search/<param>', methods=['GET'])
def extracttoken(param):
    usertoken = searchScript.extractToken(param)
    coincidences = searchScript.searchCoincidences(usertoken)
    return coincidences

if __name__ == '__main__':
    app.run(host="localhost", port=8000, debug=True)

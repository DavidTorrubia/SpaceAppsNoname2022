from urllib import response
from flask import Flask
<<<<<<< HEAD
from flask import jsonify
from flask import request
=======
from backend.searchScript import searchCoincidences
>>>>>>> back
import extractText
import nltk
import searchScript
app = Flask(__name__)

@app.route('/')
def hello_world():  # put application's code here
    text = "" #extractText.extracttext('..\\..\\a19740008397.pdf')
    kw = extractText.getkeywords(text)
    return kw


<<<<<<< HEAD
@app.route('/api/search', methods=['POST'])
def search():
    content = request.get_json()
    # process
    return jsonify(content)
=======
app.route('/api/v1/search/<param>', methods=['GET'])
def extracttoken(param):
    usertoken = searchScript.extractToken(param)
    coincidences = searchScript.searchCoincidences(usertoken)
    return coincidences
>>>>>>> back

if __name__ == '__main__':
    app.run(host="localhost", port=8000, debug=True)

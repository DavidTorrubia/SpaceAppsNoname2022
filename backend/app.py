from flask import Flask
from flask import jsonify
from flask import request
import extractText

app = Flask(__name__)

@app.route('/')
def hello_world():  # put application's code here

    # text = extractText.extracttext('..\..\sample.pdf')

    return text
# return text

@app.route('/api/search', methods=['POST'])
def search():
    content = request.get_json()
    # process
    return jsonify(content)

if __name__ == '__main__':
    app.run(host="localhost", port=8000, debug=True)

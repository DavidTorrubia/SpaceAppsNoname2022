from flask import Flask
import extractText


app = Flask(__name__)


@app.route('/')
def hello_world():  # put application's code here

    text = extractText.extracttext('..\..\sample.pdf')

    return text


# return text


if __name__ == '__main__':
    app.run()

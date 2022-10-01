from ast import keyword
from keybert import KeyBERT
import flask
from backend.extractText import extracttext
from opensearchpy import OpenSearch

host = 'localhost'
port = 9200
auth = ('admin', 'admin')

client = OpenSearch(
    hosts = [{'host': host, 'port': port}],
    http_compress = True,
    http_auth = auth,
    use_ssl = True,
    verify_certs = False,
    ssl_assert_hostname = False,
    ssl_show_warn = False,
)

def extractToken (search):
    kw_model = KeyBERT()
    keywords = kw_model.extract_keywords(search, keyphrase_ngram_range=(1,3),stop_words=None)
    return keywords

def searchCoincidences(search):
    query = {keyword: search}
    coincidences = client.search(body = query)
    return coincidences

from ast import keyword
from keybert import KeyBERT
import flask
from extractText import extracttext
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
    salida = []
    for keyword in keywords :
        first = keyword[0]
        salida.append(first)
    return salida

def searchCoincidences(search):
    shouldQueries = []
    for word in search:
        shouldQueries.append({ "match_phrase": {"keywords": "\"" + word + "\""}})
    # query = {
    #     "query" : { 
    #         "match" : { 
    #             "keywords" : salida
    #             } 
    #         } 
    #     }

    query = {
        "query": {
            "bool": {
                "must": [],
                "filter": [
                    {
                    "match_all": {}
                    },
                    {
                    "bool": {
                        "should": shouldQueries,
                        "minimum_should_match": 1
                    }
                    }
                ],
                "should": [],
                "must_not": []
            }
        }
    }
    coincidences = client.search(body = query)
    return coincidences

def coincidencesToResponse(coincidences):
    hits = coincidences['hits']
    hitsList = hits['hits']
    mappedHits = map(hitToResponse, hitsList)
    return list(mappedHits)

def hitToResponse(hit):
    return hit['_source']
    
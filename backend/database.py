import os
import urllib

import requests
import opensearchpy
import json

from opensearchpy import OpenSearch

# folder path
from backend import extractText

dir_path = r'..\\resources\\pdf'
dir_pathtext = '..\\resources\\pdf\\'
# list to store files
res = []

host = 'localhost'
port = 9200
auth = ('admin', 'admin')  # For testing only. Don't store credentials in code.

client = OpenSearch(
    hosts=[{'host': host, 'port': port}],
    http_compress=True,  # enables gzip compression for request bodies
    http_auth=auth,
    use_ssl=True,
    verify_certs=False,
    ssl_assert_hostname=False,
    ssl_show_warn=False,
)

# create index
index_name = 'spaceapps'
index_body = {
    'settings': {
        'index': {
            'number_of_shards': 1
        }
    }
}
try:
    response = client.indices.create(index_name, body=index_body)
    print('\nCreating index:')
    print(response)
except opensearchpy.RequestError:
    print('el indice existe')

for path in os.listdir(dir_path):
    if os.path.isfile(os.path.join(dir_path, path)):
        res.append(path)

for i in range(len(res)):
    CleanKW = []
    text = extractText.extracttext(dir_pathtext + res[i])
    kw = extractText.getkeywords(text)
    id = res[i].replace('.pdf', '')
    #    print(text)

    nasa_Json = requests.get('https://ntrs.nasa.gov/api/citations/' + id)
    r = nasa_Json.json()
    title = r['title']
    print(kw)
    for Key in kw:
        first = Key[0]  # could be an int or a tuple
        CleanKW.append(first)
    print(CleanKW)

    # create document
    document = {
        'title': title,
        'url': 'https://ntrs.nasa.gov/api/citations/' + id + '/downloads/' + res[i],
        'keywords': CleanKW,
        'body': text
    }

    response = client.index(
        index=index_name,
        body=document,
        id=id,
        refresh=True
    )
    print('\nAdding document:')
    print(response)

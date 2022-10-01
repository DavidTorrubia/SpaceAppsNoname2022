import os
from opensearchpy import OpenSearch

# folder path
from backend import extractText

dir_path = r'..\\resources\\pdf'
dir_pathtext = '..\\resources\\pdf\\'
# list to store files
res = []

host = '192.168.30.155'
port = 9200
auth = ('admin', 'admin')  # For testing only. Don't store credentials in code.

client = OpenSearch(
    hosts=[{'host': host, 'port': port}],
    http_compress=True,  # enables gzip compression for request bodies
    http_auth=auth,
    use_ssl=False,
    verify_certs=False,
    ssl_assert_hostname=False,
    ssl_show_warn=False
)


# create index
index_name = 'SpaceApps/_doc'
index_body = {
    'settings': {
        'index': {
            'number_of_shards': 1
        }
    }
}

response = client.indices.create(index_name, body=index_body)
print('\nCreating index:')
print(response)
exit()

for path in os.listdir(dir_path):
    if os.path.isfile(os.path.join(dir_path, path)):
        res.append(path)

for i in range(len(res)):
    text = extractText.extracttext(dir_pathtext + res[i])
    kw = extractText.getkeywords(text)
    print(text)
    print(kw)
    # create document
    document = {
        'url': 'Placeholder',
        'keywords': kw,
        'body': text
    }
    id = res[i]
    try:
        response = client.index(
            index=index_name,
            body=document,
            id=id,
            refresh=True
        )
        print('\nAdding document:')
        print(response)
    except:
        print('job failed')

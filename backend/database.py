import pymongo

myclient = pymongo.MongoClient("mongodb+srv://admin:adm@cluster0.0kulm8r.mongodb.net/?retryWrites=true&w=majority")

mydb = myclient["spaceApps"]

docscol = mydb["docs"]
kwcol = mydb["keywords"]
testcol = mydb["test"]

testdict = {"Encabezado de prueba":
    {
        "Dato de prueba": "Titulo",
        "Dato de prueba 2": 14
    }

}

try:
    x = testcol.insert_one(testdict)
finally:
    myclient.close()
print(x)




# SpaceAppsNoname2022

## How to Run

Run from the project directory.

In one terminal

    cd opensearch

    docker-compose up -d

    cd ..

    py -3 -m venv venv

    venv\Scripts\activate

    pip install -r requirements.txt

    cd backend

    python backend\database.py

    python backend\app.py

In the other terminal

    cd front

    npm install

    npm start
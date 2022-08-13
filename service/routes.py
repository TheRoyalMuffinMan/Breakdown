
from flask import send_from_directory
from flask_cors import cross_origin
from service import app

@app.route('/')
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, 'index.html')
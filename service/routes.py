
from flask import send_from_directory
from service import app

@app.route("/")
def serve():
    return "hello word"

from flask import send_from_directory
from service import app

@app.route("/home")
def serve():
    return send_from_directory(app.static_folder,'index.html')
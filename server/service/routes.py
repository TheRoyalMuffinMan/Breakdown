
from flask import (
    after_this_request, 
    send_from_directory, 
    make_response,
    jsonify, 
    request
)
from werkzeug.utils import secure_filename
from service.manipulation.parse import Parser
from service.extract.factory import Extractor
from service import app
import os

@app.route("/")
def serve():
    return send_from_directory(app.static_folder,'index.html')

@app.route("/parse", methods=['GET', 'POST'])
def parse():
    # Extract and save file
    file = request.files['file']
    filename = secure_filename(file.filename)
    path = os.path.join(app.config["UPLOAD_FOLDER"], filename)
    file.save(path)

    # Extract from saved file to plain text
    parse = Extractor(path)
    text = parse.extract('pdf')

    # Parse the plain to useful information
    info = Parser(text)

    @after_this_request
    def deleteFile(response):
        os.remove(path)
        return response

    return make_response(jsonify(info.getAllInfo()), 200)
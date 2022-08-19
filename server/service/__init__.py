from flask import Flask

UPLOAD_FOLDER = "service/tmp/"
app = Flask(
    __name__, 
    static_folder="../pages", 
    static_url_path=''
)
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER

from service import routes
from service.extract import factory, pdf, doc
from service.manipulation import parse
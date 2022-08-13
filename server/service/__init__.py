from flask import Flask

app = Flask(
    __name__, 
    static_folder="../pages", 
    static_url_path=''
)

from service import routes
from service import parse
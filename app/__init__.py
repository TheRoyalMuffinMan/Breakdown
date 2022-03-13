from flask import Flask

app = Flask(__name__)

from app import parse
from app import views


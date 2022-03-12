from flask import render_template, request, redirect
from app import app
import os

app.config['UPLOAD_FOLDER'] = "/home/andy/Documents/WebApp/app/tmp"

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/info")
def info():
    return render_template("info.html")

@app.route("/terms")
def terms():
    return render_template("terms.html")

@app.route("/submit")
def submit():
    return render_template("submit.html")

@app.route("/upload", methods=["GET", "POST"])
def upload():
    if request.method == "POST":

        if request.files:

            resume = request.files["pdf"]
            path = os.path.join(app.config['UPLOAD_FOLDER'], "file")
            resume.save(path)

            print("Pdf saved!")
            return redirect(request.url)

    return render_template("loading.html")

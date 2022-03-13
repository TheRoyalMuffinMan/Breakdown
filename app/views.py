from flask import render_template, request, redirect
from app.parse import PDF
from app import app
import os

app.config['UPLOAD_FOLDER'] = "app/tmp"
app.config['ALLOWED_FILE_EXTENSIONS'] = ["pdf"]

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
    def allowed_files(filename):
        if not filename or '.' not in filename:
            return False
        ext = filename.rsplit('.', 1)[1]
        return ext.lower() in app.config['ALLOWED_FILE_EXTENSIONS'] 

    if request.method == "POST":

        if request.files:

            resume = request.files["pdf"]
            if not allowed_files(resume.filename):
                return render_template("submit.html")
            filename = resume.filename.replace(' ', '_')
            path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            resume.save(path)
            pdf = PDF(filename)
            print("Pdf saved!")
            return redirect(request.url)

    return render_template("loading.html")

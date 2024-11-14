from flask import Flask, render_template

app = Flask(__name__)

# main homepage.
@app.route('/')
def home():
    return render_template('home.html')


@app.route('/bio')
def bio():
    return render_template('bio.html')

@app.route('/soccer')
def soccer():
    return render_template('soccer.html')

@app.route('/project')
def projects():
    return render_template('project.html')


if __name__ == '__main__':
    app.run(debug=True)
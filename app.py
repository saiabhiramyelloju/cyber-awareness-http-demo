from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/login', methods=['POST'])
def login():
    username = request.form.get('username', '')
    password = request.form.get('password', '')
    return render_template('result.html', username=username, password=password)

if __name__ == '__main__':
    # Intentionally HTTP and intentionally insecure for a controlled classroom lab.
    app.run(host='0.0.0.0', port=8080, debug=False)

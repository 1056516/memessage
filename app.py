from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/random_user')
def random_user():
    import random
    guest_number = "Guest" + str(random.randint(1000000000, 9999999999))
    return jsonify({"guest": guest_number})

if __name__ == '__main__':
    app.run(debug=True)

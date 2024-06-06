# from flask import Flask, request, jsonify
# import json
# import threading
# import time

# app = Flask(__name__)

# # משתנה גלובלי לשמירת הנתונים
# data = []
# alert = False

# # פונקציה שמחזירה מספר אקראי
# def function_x():
#     import random
#     return random.randint(1, 100)

# # פונקציה שמחזירה ערך בולאני
# def function_y():
#     import random
#     return random.choice([True, False])

# # פונקציה שמעדכנת את המערך כל 3 שניות
# def update_data():
#     while True:
#         number = function_x()
#         data.append(number)
#         time.sleep(3)

# # פונקציה שמעדכנת את המשתנה הבולאני כל 3 שניות
# def update_alert():
#     global alert
#     while True:
#         alert = function_y()
#         time.sleep(3)

# @app.route('/register', methods=['POST'])
# def register():
#     data = request.get_json()

#     # שמירת הנתונים בקובץ JSON
#     with open('registrations.json', 'a') as f:
#         json.dump(data, f)
#         f.write('\n')  # מוסיף שורה חדשה אחרי כל רשומה

#     return jsonify({"message": "Registration successful"}), 201

# @app.route('/get-data', methods=['GET'])
# def get_data():
#     return jsonify(data)

# @app.route('/alert', methods=['GET'])
# def get_alert():
#     return jsonify({"alert": alert})

# if __name__ == '__main__':
#     # הפעלת תהליכים נפרדים לעדכון הנתונים וההתראה
#     threading.Thread(target=update_data).start()
#     threading.Thread(target=update_alert).start()
#     app.run(debug=True)
from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import threading
import time

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# משתנה גלובלי לשמירת הנתונים
data = []
alert = False

# פונקציה שמחזירה מספר אקראי
def function_x():
    import random
    return random.randint(1, 100)

# פונקציה שמחזירה ערך בולאני
def function_y():
    import random
    x=random.choice([True, False])
    print(x)
    return x

# פונקציה שמעדכנת את המערך כל 3 שניות
def update_data():
    while True:
        number = function_x()
        data.append(number)
        time.sleep(3)

# פונקציה שמעדכנת את המשתנה הבולאני כל 3 שניות
def update_alert():
    global alert
    while True:
        alert = function_y()
        time.sleep(3)

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()

    # שמירת הנתונים בקובץ JSON
    with open('registrations.json', 'a') as f:
        json.dump(data, f)
        f.write('\n')  # מוסיף שורה חדשה אחרי כל רשומה

    return jsonify({"message": "Registration successful"}), 201

@app.route('/get-data', methods=['GET'])
def get_data():
    return jsonify(data)

@app.route('/alert', methods=['GET'])
def get_alert():
    return jsonify({"alert": alert})

if __name__ == '__main__':
    # הפעלת תהליכים נפרדים לעדכון הנתונים וההתראה
    threading.Thread(target=update_data).start()
    threading.Thread(target=update_alert).start()
    app.run(debug=True)
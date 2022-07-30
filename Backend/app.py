import json

from flask import Flask, redirect, request, url_for
from flask_cors import CORS, cross_origin

from Series import Series

app = Flask(__name__)

CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/current-shows/', methods=['GET', 'POST'])
def current_shows():
    
    new_series = Series("Attack on Titan", "Joe Mamma", 10, "Show", 110, 10)
    new_series2 = Series("Grand Blue", "I dunno", 10, "Show", 12, 10)
    

    new_series_array = []
    new_series_array.append(new_series.export_dict())
    new_series_array.append(new_series2.export_dict())
    
    return json.dumps(new_series_array)

@app.route('/sign-up/', methods=['GET', 'POST'])
def submit():
    if request.method != 'GET':
        print("Request recieved")
        submission = request.get_json(force=True)
        print(submission)
        
        return json.dumps({"message": "success"}), 200

    return "Failed"

# @app.route('/current/', methods=['GET'])
# def current_song():
#     data = SpotifyAPI().getCurrentSongJson()

#     db = Database()

#     if db.findSong(data["song"], data["artist"]):
#         data["ranked"] = True
#     else:
#         data["ranked"] = False
    
#     db.closeDatabase()

#     return json.dumps(data)

# # @cross_origin
# @app.route('/submit/', methods=['GET', 'POST'])
# def submit():
#     if request.method != 'GET':
#         print("Request recieved")
#         submission = request.get_json(force=True)
#         print(submission)
        
#         db = Database()

#         if not db.findSong(submission["song"], submission["artist"]):

#             db.insertSong(
#                 submission["artist"],
#                 submission["song"],
#                 submission["album"],
#                 submission["rating"],
#                 submission["feeling"]
#             )
#         db.closeDatabase()

#         return "Success", 200

#     return "Failed"

if __name__ == '__main__':
    #app.config['CORS_HEADERS'] = 'Content-Type'
    app.run(host='0.0.0.0', port=105, debug=True)
    #app.config['CORS_HEADERS'] = 'Content-Type'

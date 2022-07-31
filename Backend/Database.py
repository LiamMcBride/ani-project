import sqlite3

class Database:
    def query_database(self, query):
        print("Attempting query: ", query)
        sqliteConnection = sqlite3.connect('./Backend/database.db')
        cursor = sqliteConnection.cursor()

        cursor.execute(query)
        record = cursor.fetchall()
        cursor.close()
        print(record)

        sqliteConnection.close()
        print("Connection closed")


db = Database()
db.query_database("select email from users;")
db.query_database("INSERT INTO users (created_at, user_name, email, password) VALUES( 2022-07-30 17:45:00, mailman, mailmcbride56@gmail.com, 5678);")


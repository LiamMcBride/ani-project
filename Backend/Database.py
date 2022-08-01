import sqlite3

class Database:
    def query_database(self, query):
        print("Attempting query: ", query)
        sqlite_connection = sqlite3.connect('./Backend/database.db')
        cursor = sqlite_connection.cursor()

        cursor.execute(query)
        record = cursor.fetchall()
        cursor.close()
        print(record)
        if "INSERT" in query:
            sqlite_connection.commit()
        sqlite_connection.close()
        print("Connection closed")


db = Database()
db.query_database("select email from users;")
# db.query_database("INSERT INTO users (user_name, email, password) VALUES( 'mailman', 'mailmcbride56@gmail.com', '5678');")


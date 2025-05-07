import sqlite3

dbPath = './conversionweb.db'
conn = sqlite3.connect(dbPath)
cur = conn.cursor()

cur.execute("SELECT * FROM users")
rows = cur.fetchall()
for row in rows:
    print(row)

conn.close()


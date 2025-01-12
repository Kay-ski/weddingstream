from flask import Flask, render_template
from datetime import datetime

app = Flask(__name__)

@app.route('/')
def index():
    current_time = datetime.fromisoformat('2025-01-12T07:18:47-04:00')
    return render_template('index.html', current_time=current_time.strftime('%Y-%m-%d %H:%M:%S'))

if __name__ == '__main__':
    app.run(debug=True)

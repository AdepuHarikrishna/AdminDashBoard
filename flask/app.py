# app.py

from flask import Flask, jsonify, request
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app)

# Example API endpoint for fetching data
@app.route('/api/data', methods=['GET'])
def get_data():
    # Fetch the data from your database or any other source
    data = {
        "first_name": "nainu",
        "last_name": "wadhwa",
        # ...
        # Include the rest of your data fields
    }
    return jsonify(data)

# Example API endpoint for exporting data to CSV
@app.route('/api/export', methods=['GET'])
def export_data():
    # Fetch the data from your database or any other source
    data = {
        # Fetch and format your data
    }

    # Convert the data to a pandas DataFrame
    df = pd.DataFrame(data)

    # Export the DataFrame to CSV
    csv_data = df.to_csv(index=False)

    # Return the CSV file
    return csv_data


if __name__ == '__main__':
    app.run(debug=True)

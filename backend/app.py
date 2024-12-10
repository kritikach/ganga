from flask import Flask, request, jsonify
from model import predict_water_quality

app = Flask(__name__)

@app.route('/get_forecast', methods=['POST'])
def get_forecast():
    data = request.json
    location = data.get('location')
    temperature = data.get('temperature')
    precipitation = data.get('precipitation')
    
    if not location or not temperature or not precipitation:
        return jsonify({"error": "Location, temperature, and precipitation are required."}), 400

    # Call the prediction function
    result = predict_water_quality(float(temperature), float(precipitation), model_choice='RandomForest')

    return jsonify({"location": location, "forecast": result})

if __name__ == '__main__':
    app.run(debug=True, port=5000)



import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.multioutput import MultiOutputRegressor
from sklearn.ensemble import RandomForestRegressor
from xgboost import XGBRegressor
from sklearn.linear_model import LinearRegression
import os

def predict_water_quality(temperature, precipitation, model_choice='RandomForest'):
    dataset_path = r'C:\Users\CPPLAI\Documents\sih24\Ganga-Tech\backend\FinalDataset.csv'

    if not os.path.exists(dataset_path):
        return {"error": f"Dataset not found at '{dataset_path}'."}

    dataset = pd.read_csv(dataset_path)

    features = ['Temperature', 'Precipitation']
    targets = ['Dissolved Oxygen (mg/l)', 'BOD\n(mg/l)', 'pH',
               'Total Coliform (MPN/100 ml)', 'Fecal Coliform (MPN/100 ml)']

    X = dataset[features]
    y = dataset[targets]

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    scaler = StandardScaler()
    X_train_scaled = scaler.fit_transform(X_train)

    models = {
        'XGBoost': MultiOutputRegressor(XGBRegressor(random_state=42)),
        'RandomForest': MultiOutputRegressor(RandomForestRegressor(random_state=42)),
        'LinearRegression': MultiOutputRegressor(LinearRegression())
    }

    model = models[model_choice]
    model.fit(X_train_scaled, y_train)

    input_data = pd.DataFrame([[temperature, precipitation]], columns=features)
    input_data_scaled = scaler.transform(input_data)

    predictions = model.predict(input_data_scaled)

    prediction_results = {target: pred for target, pred in zip(targets, predictions[0])}

    return prediction_results

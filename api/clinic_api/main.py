from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import Union
from pydantic import BaseModel

import numpy as np
import joblib 

app = FastAPI()
model = joblib.load("../prediction_model.pkl")

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# model 
class Insurance(BaseModel):
    age: int
    sex: str
    bmi: float
    children: int
    smoker: bool
    region: str

@app.post("/previsao/")
def read_item(data: Insurance):
    sex_encoded = [1, 0] if data.sex == "male" else [0, 1]
    smoker_encoded = [1, 0] if data.smoker == "yes" else [0, 1]
    region_encoding = [0] * 4


    # Combine features (replace with your encoding logic if more complex)
    features = np.array([data.age, data.bmi, data.children] + sex_encoded + smoker_encoded + region_encoding)

    # Reshape for model prediction
    features = features.reshape(1, -1)  # Reshape to a single row

    # Predict cost
    result = model.predict(features)[0]

    # result = model.predict(X)

    return {"charge": result}
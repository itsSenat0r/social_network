from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
import json
import random

api = FastAPI()

origins = ["*"]

api.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@api.get("/")
def sendPost():
    with open('./placeholders.json', 'r', encoding="utf8") as f:
        data = json.load(f)
        return [data[random.randint(0, len(data) - 1)], 
                data[random.randint(0, len(data) - 1)],
                data[random.randint(0, len(data) - 1)]]
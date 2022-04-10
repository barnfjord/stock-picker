import dotenv
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

dotenv.load_dotenv("../.env")

app = FastAPI()
app.mount("/", StaticFiles(directory="../client/build/", html=True), name="build")

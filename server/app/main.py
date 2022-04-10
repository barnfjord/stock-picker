from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from fastapi.staticfiles import StaticFiles

from app.stock_handler import get_last_prices

app = FastAPI()
app.add_middleware(CORSMiddleware, allow_origins=["*"])

tickers = ["AAPL", "MSFT", "GOOG", "FB", "NFLX", "TSLA", "AMZN", "SPY", "SQ", "SHOP"]


@app.get("/picks")
async def get_picks():
    data = get_last_prices(tickers)
    return JSONResponse(data)


app.mount("/", StaticFiles(directory="../client/build/", html=True), name="build")

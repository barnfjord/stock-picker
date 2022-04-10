from fastapi import FastAPI
from fastapi.responses import JSONResponse
from fastapi.staticfiles import StaticFiles

app = FastAPI()


@app.get("/picks")
async def get_picks():
    return JSONResponse(
        [
            {
                "ticker": "AAPL",
                "price": "120.35",
                "change": "-0.01",
                "ticks": [
                    {"time": "2018-01-01T00:00:00.000Z", "price": "120.35"},
                    {"time": "2018-01-01T00:01:00.000Z", "price": "120.35"},
                    {"time": "2018-01-01T00:02:00.000Z", "price": "120.35"},
                    {"time": "2018-01-01T00:03:00.000Z", "price": "120.35"},
                ],
            },
            {
                "ticker": "MSFT",
                "price": "51.15",
                "change": "-0.01",
                "ticks": [
                    {"time": "2018-01-01T00:00:00.000Z", "price": "51.15"},
                    {"time": "2018-01-01T00:01:00.000Z", "price": "51.15"},
                    {"time": "2018-01-01T00:02:00.000Z", "price": "51.15"},
                    {"time": "2018-01-01T00:03:00.000Z", "price": "51.15"},
                ],
            },
        ]
    )


app.mount("/", StaticFiles(directory="../client/build/", html=True), name="build")

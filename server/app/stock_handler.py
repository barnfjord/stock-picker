import os

# import pprint
from datetime import date, timedelta

import dotenv
import requests

dotenv.load_dotenv(".env")
api_key = os.environ["API_KEY"]
headers = {"Content-Type": "application/json"}


def get_historical_data(ticker: str, start_date: date):
    fmt_date = start_date.strftime("%Y-%m-%d")  # Format date to YYYY-MM-DD
    response = requests.get(
        f"https://api.tiingo.com/iex/{ticker}/prices?startDate={fmt_date}&resampleFreq=1min"
        + f"&token={api_key}&afterHours=1&forceFill=1&columns=open,high,low,close,volume",
        headers=headers,
    )
    # Timestamps are 13:30 - 20:00 for regular hours, 12:00 - 21:30 for after hoursß
    return response.json()


def get_last_prices(tickers: list[str]):
    response = requests.get(
        f"https://api.tiingo.com/iex/?tickers={','.join(tickers)}&token={api_key}", headers=headers
    )
    data = []
    for ticker in response.json():
        ticks = get_historical_data(
            ticker["ticker"], date.today()
        )  # TODO: Replace with data from db, set up db filling periodically
        change = (ticks[-1]["close"] - ticks[0]["close"]) / ticks[0]["close"]  # Percent change
        data.append(
            {"ticker": ticker["ticker"], "price": ticker["last"], "change": change, "ticks": ticks}
        )

    return data


# if __name__ == "__main__":
#     # print(get_historical_data("AAPL", date.today() - timedelta(days=1)))
#     # res = requests.get(f"https://api.tiingo.com/iex/?tickers={}")
#     pprint.pprint(
#         get_last_prices(["AAPL", "MSFT", "GOOG", "FB", "NFLX", "TSLA", "AMZN", "SPY", "SQ", "SHOP"])
#     )

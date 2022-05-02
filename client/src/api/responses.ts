export interface ITopStockPickResponse {
    ticker: string,
    price: number,
    change: number, // as a percentage
    ticks: ITicks[]
}

export interface ITicks {
  prime: Date,
  price: number
}
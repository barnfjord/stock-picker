import {ITopStockPickResponse} from '../api/responses';
import useAxios from 'axios-hooks';
import styled from 'styled-components'

export function StockItem({stock}: {stock: ITopStockPickResponse}): JSX.Element {
  return (
    <StonkCard>
      <div className='info-container'>
        <h2>Ticker: {stock.ticker}</h2>
        <p>Price: {stock.price}</p>
        <p>Percent Change: {(stock.change * 100).toFixed(2)}%</p>
        <div>
          {/* GRAPH EVENTUALLY*/}
        </div>
      </div>
      </ StonkCard>
  )
}

export function StockList({stocks}: {stocks: ITopStockPickResponse[]}): JSX.Element {
  return (
    <div className='stonks-container'>
      {stocks.map(stock => <StockItem stock={stock}/>)}
    </div>
  )
}

export function StockPage(): JSX.Element {
  const [{data}] = useAxios<ITopStockPickResponse[]>('http://192.168.1.69:8000/picks')
  return(
    <>
      <h2>Our Top Picks:</h2>
      {data ? <StockList stocks={data}/> : <div></div>}
    </>
  )
}

const StonkCard = styled.div`
  box-shadow: 0 2px 6px rgb(181 181 194 / 32%), 0 3px 60px rgb(181 181 194 / 32%);
  margin-bottom: 32px;
  display: flex;
  flex-direction: row;
  border-radius: 16px;
  background-color: white;

  .info-container {
    margin-left: 16px;
  }
`;
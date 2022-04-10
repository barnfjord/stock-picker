import {
  Route,
  Routes,
  BrowserRouter as Router
} from 'react-router-dom';

import { StockPage } from '../stocks-page/StockItem';
import PageTemplate from './page-template/PageTemplate';

function RootContainer(): JSX.Element {

  return (
    <Router>
      <PageTemplate>
        <Routes>
          <Route path="/" element={<StockPage />} />
        </Routes>
      </ PageTemplate>
    </Router>
  );
}

export default RootContainer;
import {
  Route,
  Routes,
  BrowserRouter as Router
} from 'react-router-dom';

import PageTemplate from './page-template/PageTemplate';
import {HelloWorld} from './HelloWorld';

function RootContainer(): JSX.Element {

  return (
    <Router>
      <PageTemplate>
        <Routes>
          <Route path="/hello" element={<HelloWorld />} />
        </Routes>
      </ PageTemplate>
    </Router>
  );
}

export default RootContainer;
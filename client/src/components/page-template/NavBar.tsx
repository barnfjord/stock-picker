import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Navbar(): JSX.Element {
  return (

      <Nav>
        <div className='menu'>
          <Link to='/'>
            <div className='logo' />
          </Link>
          <div>
            {/* Route Go Here */}
          </div>
        </div>
      </Nav>
  );
}

const Nav = styled.div`
  .logo {
    color: red;
  }
`

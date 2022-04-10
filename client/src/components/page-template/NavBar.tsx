import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import graphIcon from '../icons/graph-svgrepo-com.svg'

export default function Navbar(): JSX.Element {
  return (

      <Nav>
        <div className='menu'>
          <StyledLink to='/'>
            <div className='logo-container'>
              <img className='logo' src={graphIcon} alt="Subset Logo" />
              <h2 className="h3">Stonks</h2>
            </div>
          </StyledLink>
          <div>
            {/* Route Go Here */}

          </div>
        </div>
      </Nav>
  );
}

const Nav = styled.div`
  display: flex;
  justify-content: center;
  background-color: #107F26;
  height: 60px;
  width: 100%;
  box-shadow: 0 2px 8px rgb(0 0 0 / 8%);
  /* text-decoration: none; */


  .menu {
    padding: 0 24px;
    max-width: 800px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo-container {
      display: flex;
      flex-direction: row;
      color: white;

      .h3 {
        text-decoration: none;
        margin-left: 8px;
      }
    }

    .logo {
      width: 60px;
      justify-self: start;
      margin-right: 8px;
    }
  }
`

const IconLink = styled(NavLink)`
  margin-left: 14px;
  padding: 10px;

  svg {
    path {
      fill: grey;
    }
  }

  &.active {
    svg {
      path {
        fill: grey;
      }
    }
  }

  &:hover {
    svg {
      path {
        fill: grey;
      }
    }
  }
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
`
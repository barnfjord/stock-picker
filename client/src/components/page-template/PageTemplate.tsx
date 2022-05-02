import styled from 'styled-components';
import NavBar from './NavBar';

interface IPageTemplate {
  children: JSX.Element | JSX.Element[];
}

function PageTemplate({ children }: IPageTemplate): JSX.Element {
  return (
    <Container>
      <NavBar />
      <main>
        {children}
      </main>
    </Container>
  );
}

export default PageTemplate;

const Container = styled.div`
  background-color: #eaeaea;
  main {
    padding: 0 24px;
    margin: 28px auto;
    max-width: 800px;
    min-width: 320px;
  }
`;
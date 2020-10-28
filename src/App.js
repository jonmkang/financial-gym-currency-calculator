import './App.css';

import 'semantic-ui-css/semantic.min.css'

import Nav from './Components/Nav/Nav';
import Calculator from './Components/Calculator/Calculator';
import { Container, Header, Segment } from 'semantic-ui-react';

function App() {

  return (
    <>
    <Nav/>
    <Header textAlign='center'>Currency Exchange Calculator</Header>
    <Container>
      <Calculator/>
    </Container>
    </>
  );
}

export default App;

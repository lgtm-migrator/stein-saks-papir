import React from 'react';
import Container from 'react-bootstrap/Container';

import Main from './components/Main/Main.component';

function App() {
  return (
    <div className="root">
      <Container fluid>
        <Main />
      </Container>
    </div>

  );
}

export default App;

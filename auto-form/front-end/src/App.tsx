import React, { useCallback, useEffect, useState } from 'react';
import SideBar from './components/sidebar';
// import { Content } from './components/sidebar/style';
import RootElement from './config/routes';
import { Container } from './config/style';

const App = () => {
  return(
    <Container>
        <RootElement />
    </Container>
  )
}

export default App;

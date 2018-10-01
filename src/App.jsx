import React, { Component } from 'react';
import styled from 'styled-components';

import './App.css';
import Card from './components/Card';
import {link} from './resources/links';
import cd from './resources/cd.svg';

const VideoWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`;

const BodyWrapper = styled.div`
  background-color: white;
`;

const AppContainer = styled.div`
  text-align: center;
`;

class App extends Component {
    render() {
        return (
            <AppContainer>
                <header className="App-header">
                    <img src={cd} className="App-logo" alt="logo" />
                    <h1 className="App-title">musicdump</h1>
                </header>
                <BodyWrapper>
                    <VideoWrapper>
                        {Object.keys(link).map(linkName => <Card title={linkName} url={link[linkName]} />)}
                    </VideoWrapper>
                </BodyWrapper>
            </AppContainer>
        );
    }
}

export default App;

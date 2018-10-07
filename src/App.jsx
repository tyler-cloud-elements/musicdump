import React, { Component } from 'react';
import styled from 'styled-components';

import './App.css';
import Card from './components/Card';
import {link} from './resources/links';
import cd from './resources/cd.svg';

const VideoWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: ${props => (props.isDesktop ? 'row' : 'column')}; /* hack for mobile */
`;

const BodyWrapper = styled.div`
  background-color: lightgray;
`;

const AppContainer = styled.div`
  text-align: center;
`;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDesktop: window.outerWidth > 1200,
        };
    }
    render() {
        const isDesktop = this.state.isDesktop;

        return (
            <AppContainer>
                <header className="App-header">
                    <img src={cd} className="App-logo" alt="logo" />
                    <h1 className="App-title">musicdump</h1>
                </header>
                <BodyWrapper>
                    <VideoWrapper isDesktop={isDesktop}>
                        {Object.keys(link).map(linkName => <Card isDesktop={isDesktop} title={linkName} url={link[linkName]} />)}
                    </VideoWrapper>
                </BodyWrapper>
            </AppContainer>
        );
    }
}

export default App;

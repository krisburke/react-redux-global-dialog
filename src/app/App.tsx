import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logo.svg';
import { Rotate } from '../common/components/Rotate';

const StyledApp = styled.div`
    text-align: center;
`;

const AppHeader = styled.header`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

const AppLogo = styled.img`
    height: 40vmin;
    pointer-events: none;
`;

const AppLink = styled.a`
    color: #61dafb;
`;

const App: React.FC = () => {
    return (
        <StyledApp>
            <AppHeader>
                <Rotate>
                    <AppLogo src={logo} alt="logo" />
                </Rotate>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <AppLink
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </AppLink>
            </AppHeader>
        </StyledApp>
    );
};

export default App;

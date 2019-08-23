import React from 'react';
import styled, {createGlobalStyle, ThemeProvider} from 'styled-components';
import {themeVariables} from './theme-variables';
import {Reset} from './reset';

const StyledAppWrapper = styled.div`
  background-color: ${props => props.theme.colors.appBackground};
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
`;

interface AppWrapperProps {
    children: React.ReactNode;
    dark?: boolean;
}


export const AppWrapper = (props: AppWrapperProps): any => {
    const Global = createGlobalStyle`${Reset}`;
    {
        return props.dark ? null : (
            <ThemeProvider theme={themeVariables}>
                <>
                    <StyledAppWrapper>{props.children}</StyledAppWrapper>
                    <Global/>
                </>
            </ThemeProvider>
        )
    }
};

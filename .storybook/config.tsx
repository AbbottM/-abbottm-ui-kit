import * as React from 'react';
import {
    configure,
    addDecorator,
    addParameters,
    setAddon
} from '@storybook/react';
import {
    createGlobalStyle,
    ThemeProvider
} from 'styled-components';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';
import {withA11y} from '@storybook/addon-a11y';
import 'reflect-metadata';
import {themeVariables} from "../src/theme";
import {Viewports} from "./viewports";
import {Reset} from "../src/theme";
import {jsxDecorator} from 'storybook-addon-jsx';

const req = require.context('../src/stories', true, /\.stories\.tsx$/);

setAddon(jsxDecorator);

function loadStories() {
    req.keys().forEach(req);
}

const GlobalStyles = createGlobalStyle`${Reset}`;

addDecorator(withA11y);

addDecorator(story => (
    <ThemeProvider theme={themeVariables}>
        <>
            {story()}
        </>
    </ThemeProvider>
));

addParameters({viewport: {viewports: {...INITIAL_VIEWPORTS, ...Viewports}}});

configure(loadStories, module);

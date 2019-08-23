import {DefaultTheme} from 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme  {
        colors: {
            appBackground: string;
        };

        textColors: {
            primary: string;
            secondary: string;
            danger: string;
            light_gray: string;
            medium_gray: string;
            dark_gray: string;
        };

        borders: {
            boxShadow: string;
            borderRadius: string;
        };

        button: {
            backgroundColor: string;
            buttonDanger: string;
            textColor: string;
            fontSize: string;
        }
    }
}


export const themeVariables: DefaultTheme = {
    textColors: {
        primary: '#333333',
        secondary: '#E60059',
        light_gray: '#EFEFEF',
        medium_gray: '#979797',
        dark_gray: '#747474',
        danger: 'rgb(220, 53, 69)',

    },
    colors: {
        appBackground: '#EFEFEF'
    },
    borders: {
        boxShadow: '0 2px 7px 0 rgba(0,0,0,0.20)',
        borderRadius: '5px',
    },
    button: {
        backgroundColor: '#FFFFFF',
        buttonDanger: 'rgb(220, 53, 69)',
        fontSize: '14px',
        textColor: 'black',

    }
};

import {css} from 'styled-components';

export const Reset = css`
     html {
        box-sizing: border-box;
        font-size: 62.5%; /* Makes rem font sizes usable: 14px = 1.4rem, 24px = 2.4rem */
        line-height: 1.15;
        -webkit-text-size-adjust: 100%;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    :root {
        -moz-tab-size: 4;
        tab-size: 4;
    }

    * {
        margin: 0;
        padding: 0;
    }

    body {
        margin: 0;
        color: ${props => props.theme.textColors.primary};
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        background-color: white;
        font-size: 1.6rem;
    }

    a {
        text-decoration: none;
        color: ${props => props.theme.textColors.primary};
    }

    hr {
        height: 0;
    }

    abbr[title] {
        text-decoration: underline dotted;
    }

    b,
    strong {
        font-weight: bolder;
    }

    code,
    kbd,
    samp,
    pre {
        font-size: 1rem;
    }

    small {
        font-size: 80%;
    }

    sub,
    sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
    }

    sub {
        bottom: -0.25em;
    }

    sup {
        top: -0.5em;
    }

    button,
    input,
    optgroup,
    select,
    textarea {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
    }

    button,
    select {
        text-transform: none;
    }

    button,
    [type='button'],
    [type='reset'],
    [type='submit'] {
        -webkit-appearance: button;
    }

    button::-moz-focus-inner,
    [type='button']::-moz-focus-inner,
    [type='reset']::-moz-focus-inner,
    [type='submit']::-moz-focus-inner {
        border-style: none;
        padding: 0;
    }

    button:-moz-focusring,
    [type='button']:-moz-focusring,
    [type='reset']:-moz-focusring,
    [type='submit']:-moz-focusring {
        outline: 1px dotted ButtonText;
    }

    fieldset {
        padding: 0.35em 0.75em 0.625em;
    }

    legend {
        padding: 0;
    }

    progress {
        vertical-align: baseline;
    }

    [type='number']::-webkit-inner-spin-button,
    [type='number']::-webkit-outer-spin-button {
        height: auto;
    }

    [type='search'] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
    }

    [type='search']::-webkit-search-decoration {
        -webkit-appearance: none;
    }

    ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
    }

    summary {
        display: list-item;
    }

    img {
        max-width: 100%;
        height: auto;
        display: block;
    }
`;

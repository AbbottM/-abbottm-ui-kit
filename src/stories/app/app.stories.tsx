import React from 'react';
import {storiesOf} from "@storybook/react";
import {AppWrapper} from "../../theme";

storiesOf('App ', module)
    .add('App wrapper', () => (
        <AppWrapper>button</AppWrapper>
    )
);

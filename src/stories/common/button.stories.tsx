import React from 'react';
import {storiesOf} from "@storybook/react";
import {ButtonPrimary} from "../../common/button/ButtonPrimary";

storiesOf('common ', module)
    .add('primary button', () => (
        <ButtonPrimary disabled={true} onClick={() => console.log('ELO')}>Hello world</ButtonPrimary>
    )
);

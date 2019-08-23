import React from 'react';

import {storiesOf} from "@storybook/react";
import {Row} from '../../layout';


storiesOf('layout', module)
    .add('with row', () => (
            <Row>Hello</Row>
        )
    );

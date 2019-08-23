import React from 'react';
import {storiesOf} from "@storybook/react";
import {GridContainer} from '../../layout';
import {GridItem} from "../../layout/grid";
import { jsxDecorator } from 'storybook-addon-jsx';

storiesOf('layout', module)
    .addDecorator(jsxDecorator)
    .add('nested grid layout', () => (
            <GridContainer
                gridTemplateColumns={'repeat(3, 1fr)'}
                gridTemplateRows={'auto'}
                gridGap={'2em'}
                gridAutoRows={'minmax(10rem, auto)'}

            >
                <GridContainer
                    gridTemplateColumns={'repeat(3, 1fr)'}
                    gridAutoRows={'70px'}
                    gridGap={'5px'}
                >
                    <GridItem
                        gridColumn={'3'}
                        gridRow={'3'}
                        alignSelf={'start'}
                    >
                        Lorem ipsum dolor sit amet edited
                    </GridItem>
                    <GridItem gridRow={'1/3'}>
                        Lorem ipsum dolor sit amet
                    </GridItem>
                    <GridItem>
                        Lorem ipsum dolor sit amet
                    </GridItem>
                </GridContainer>
                <GridItem>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque augue eget congue aliquet.
                    Suspendisse malesuada nibh eu lorem faucibus, in porta massa semper. Integer ut sagittis sem. Fusce
                    justo sapien, blandit et semper eget, rhoncus a neque. Duis mollis semper sem, nec convallis sem
                    tincidunt sit amet. Donec semper turpis eros, eu pharetra sapien tincidunt nec. Maecenas at consectetur
                    orci. Nunc pharetra metus ante, sed tempus turpis faucibus vel. Suspendisse erat lectus, fringilla ac
                    nisi vitae, mollis aliquet turpis. Duis ornare arcu ut diam mattis, id volutpat tortor ullamcorper.
                </GridItem>
                <GridItem>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque augue eget congue aliquet.
                    Suspendisse malesuada nibh eu lorem faucibus, in porta massa semper. Integer ut sagittis sem. Fusce
                    justo sapien, blandit et semper eget, rhoncus a neque. Duis mollis semper sem, nec convallis sem
                    tincidunt sit amet. Donec semper turpis eros, eu pharetra sapien tincidunt nec. Maecenas at consectetur
                    orci. Nunc pharetra metus ante, sed tempus turpis faucibus vel. Suspendisse erat lectus, fringilla ac
                    nisi vitae, mollis aliquet turpis. Duis ornare arcu ut diam mattis, id volutpat tortor ullamcorper.
                </GridItem>
                <GridItem>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque augue eget congue aliquet.
                    Suspendisse malesuada nibh eu lorem faucibus, in porta massa semper. Integer ut sagittis sem. Fusce
                    justo sapien, blandit et semper eget, rhoncus a neque. Duis mollis semper sem, nec convallis sem
                    tincidunt sit amet. Donec semper turpis eros, eu pharetra sapien tincidunt nec. Maecenas at consectetur
                    orci. Nunc pharetra metus ante, sed tempus turpis faucibus vel. Suspendisse erat lectus, fringilla ac
                    nisi vitae, mollis aliquet turpis. Duis ornare arcu ut diam mattis, id volutpat tortor ullamcorper.
                </GridItem>
            </GridContainer>
        )
    );

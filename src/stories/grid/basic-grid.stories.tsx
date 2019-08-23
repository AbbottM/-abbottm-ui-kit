import React from 'react';
import {storiesOf} from "@storybook/react";
import {GridContainer, GridItem} from '../../layout';

storiesOf('layout', module)
    .add('basic grid layout', () => (
            <GridContainer
                gridTemplateColumns={'repeat(3, 1fr)'}
                gridTemplateRows={'auto'}
                gridGap={'2em'}
                gridAutoRows={'minmax(10rem, auto)'}

            >
                <GridItem>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque augue eget congue aliquet.
                    Suspendisse malesuada nibh eu lorem faucibus, in porta massa semper. Integer ut sagittis sem. Fusce
                    justo sapien, blandit et semper eget, rhoncus a neque. Duis mollis semper sem, nec convallis sem
                    tincidunt sit amet. Donec semper turpis eros, eu pharetra sapien tincidunt nec. Maecenas at consectetur
                    orci. Nunc pharetra metus ante, sed tempus turpis faucibus vel. Suspendisse erat lectus, fringilla ac
                    nisi vitae, mollis aliquet turpis. Duis ornare arcu ut diam mattis, id volutpat tortor ullamcorper.
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

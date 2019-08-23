import styled from 'styled-components';
import {
    AlignSelfProperty,
    GridTemplateColumnsProperty,
    GridTemplateProperty
} from 'csstype';

export interface GridItemProps {
    gridColumn?: GridTemplateColumnsProperty<GridTemplateProperty>;
    gridRow?: GridTemplateColumnsProperty<GridTemplateProperty>;
    alignSelf?: AlignSelfProperty;
}

export const GridItem = styled.div<GridItemProps>`
  grid-column: ${props =>
    props.gridColumn ? props.gridColumn : ''};
  grid-row: ${props =>
    props.gridRow ? props.gridRow : ''};
  align-self: ${props =>
    props.alignSelf ? props.alignSelf : 'stretch'};
`;

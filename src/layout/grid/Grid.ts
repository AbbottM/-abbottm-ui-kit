import styled from 'styled-components';
import {
    AlignItemsProperty,
    DisplayProperty, GridAutoRowsProperty, GridColumnGapProperty,
    GridColumnProperty, GridGapProperty, GridRowProperty,
    GridTemplateColumnsProperty, GridTemplateProperty,
    GridTemplateRowsProperty, JustifyItemsProperty,
} from "csstype";

export interface GridProps {
    gridTemplateColumns: GridTemplateColumnsProperty<GridTemplateProperty>;
    gridTemplateRows?: GridTemplateRowsProperty<GridTemplateProperty>;
    gridAutoRows?: GridAutoRowsProperty<GridRowProperty>;
    gridColumnGap?: GridColumnProperty;
    gridRowGap?: GridRowProperty;
    gridGap?: GridGapProperty<GridColumnGapProperty<GridRowProperty>>
    display?: DisplayProperty;
    justifyItems?: JustifyItemsProperty;
    alignItems?: AlignItemsProperty;
}

export const GridContainer = styled.div<GridProps>`
    display: ${props =>
        props.display ? props.display : 'grid'};
    grid-column-gap: ${props =>
        props.gridColumnGap ? props.gridColumnGap : '5px'};
    grid-auto-rows: ${props => 
        props.gridAutoRows ? props.gridAutoRows : 'auto'};
    grid-row-gap: ${props =>
        props.gridRowGap ? props.gridRowGap : ''};
    grid-template-columns: ${props =>
        props.gridTemplateColumns ? props.gridTemplateColumns : 'auto'};
    grid-template-rows: ${props =>
        props.gridTemplateRows ? props.gridTemplateRows : 'auto'};
    grid-gap: ${props => 
        props.gridGap ? props.gridGap : '0 px'}; 
    justify-items: ${props =>
        props.justifyItems ? props.justifyItems : 'stretch'};
    align-items: ${props =>
        props.alignItems ? props.alignItems : 'stretch'};
`;

export default GridContainer;

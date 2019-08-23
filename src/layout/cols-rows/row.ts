import {JustifyContentProperty, DisplayProperty, WidthProperty} from 'csstype';
import styled from 'styled-components';

interface RowProps {
    width?: WidthProperty<number | string>,
    justifyContent?: JustifyContentProperty;
    display?: DisplayProperty;
    reverse?: boolean;
}

export const Row = styled.div<RowProps>`
  flex-wrap: wrap;
  margin: 0 auto;
  display: ${props => props.width};
  justify-content: ${props => props.justifyContent || 'stretch'};
  display: ${props => (props.display ? props.display : 'flex')};
  flex-direction: ${props => (props.reverse ? 'row-reverse' : 'row')};
`;

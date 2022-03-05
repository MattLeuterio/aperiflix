import styled from 'styled-components';


const SpacerContainer = styled.span`
 margin: ${props => props.margin || '0px'};
 padding: ${props => props.padding || '0px'};
 display: ${props => props.display};
 width: ${props => (props.display === 'flex' ? '100%' : 'auto')}
`;

export { SpacerContainer };

import styled from 'styled-components';

export const NoResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  
  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  
  animation: fadein 1s;
  
  @media ${props => props.theme.device.mobileL} {
    margin-top: 0;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const NoResultLabel = styled.span`
  margin-top: 25px;
`;

export const ButtonWrapper = styled.span`
  width: 270px;
  margin-top: 30px;
`;

export const NoResultSubLabel = styled.div`
  margin-top: 25px;
  width:70%;
  margin:0 auto;
  text-align:center;
`

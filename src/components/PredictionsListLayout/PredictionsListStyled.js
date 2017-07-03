import styled from 'styled-components';

const PredictionsListStyled = styled.nav`
  display: flex;
  flex-wrap: nowrap;
  text-align: center;
  overflow-x: scroll;
  margin: 0 calc(50% - 9.375em);

  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default PredictionsListStyled;

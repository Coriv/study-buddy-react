import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 5px 0;
  gap: 5px;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: lightgray;
  }
`;

export const StyledButtonWrapper = styled.div`
  margin-left: auto;
  display: flex;
`;

export const StyledWrapperAverage = styled.div`
  width: 60px;
`;

export const StyledWrapperUserInfo = styled.div`
  width: 160px;
  gap: 30px;
`;

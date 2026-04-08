import styled from 'styled-components';
import { Label } from '../../atoms/Label/Label';

export const FormFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${Label} {
    margin: 15px;
  }
`;

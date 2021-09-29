import styled from 'styled-components';
import { sizes } from '@/theme/theme';

export const StyledGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 254px));
  gap: 15px;
  align-content: center;
  justify-content: center;
  max-width: ${sizes.smallDesktop};
  margin: 50px auto;
`;

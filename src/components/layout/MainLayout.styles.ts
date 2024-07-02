import styled from 'styled-components';
interface MainLayoutStyledProps {
  headerHeight: number;
}
export const MainLayoutStyled = styled.div<MainLayoutStyledProps>`
  width: 100vw;
  position: relative;

  > .main-layout {
    min-height: 100vh;

    .main-logo {
      height: ${({ headerHeight }) => headerHeight}px;
      color: #f1f1f1;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #262c3b;
    }
  }
`;
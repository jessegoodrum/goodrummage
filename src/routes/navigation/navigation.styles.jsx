import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
  }

`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 100px;
    padding: 25px;
    @media (max-width: 768px) {
        margin-bottom: 10px;
    }
`;

export const NavLinks = styled.div`

    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media (max-width: 768px) {
        width: 100%;
        justify-content: center;
        margin-top: 10px;
    }

`;

export const NavLink = styled(Link)`
      padding: 10px 15px;
      cursor: pointer;
`



import styled from 'styled-components';

import Container from '../layout/Container/Container';
import Logo from '../logo/Logo'

const StyledNavBar = styled.div`
    height: 105px;
    display: flex;
    align-items: center;
    
`
const NavBar = () => {
    return (
        <StyledNavBar>
            <Container>
                <Logo/>
            </Container>
            
        </StyledNavBar>
    )
}


export default NavBar;
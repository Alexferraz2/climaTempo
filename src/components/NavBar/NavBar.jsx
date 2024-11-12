import styled from 'styled-components';
import { useRouter } from 'next/router';

import Container from '../layout/Container/Container';
import Logo from '../logo/Logo'

const StyledNavBar = styled.div`
    height: 105px;
    display: flex;
    align-items: center;
    
`

const StyledLogo = styled.div`
    cursor: pointer;
`
const NavBar = () => {
    const router = useRouter()
    return (
        <StyledNavBar>
            <Container>
                <StyledLogo onClick={() => router.push('/')}>
                    <Logo/>
                </StyledLogo>
                
            </Container>
            
        </StyledNavBar>
    )
}


export default NavBar;
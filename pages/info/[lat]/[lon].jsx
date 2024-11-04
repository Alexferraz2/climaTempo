import styled from "styled-components";

import NavBar from "../../../src/components/NavBar/NavBar";
import Container from "../../../src/components/layout/Container/Container";

const Body = styled.div`
    background-color: ${props => props.theme.colors.gray};
    min-height: 100vh;
`


const InfoPage = () => {
    return (
        <>
            <NavBar/>
            <Body>
                <Container>
                    Conteúdo                    
                </Container>  
            </Body>
            
            
        </>
    )
    
}


export default InfoPage;
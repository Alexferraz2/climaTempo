import styled from "styled-components";

import NavBar from "../../../src/components/NavBar/NavBar";
import Container from "../../../src/components/layout/Container/Container";

const Body = styled.div`
    background-color: ${props => props.theme.colors.gray};
    min-height: 100vh;
`
const Text = styled.p`
    font-size: 20px;
    padding: 0;
    margin: 0;
`

const CityName = styled.h2`
    font-size: 60px;
    padding: 0;
    margin: 0;
`
const Content = styled.div`
    padding: 80px 0;
`


const InfoPage = () => {
    return (
        <>
            <NavBar/>
            <Body>
                <Container>
                    <Content>
                        <Text>Previsão do Tempo</Text>
                        <CityName>Florianópolis</CityName>
                    </Content>
                                       
                </Container>  
            </Body>
            
            
        </>
    )
    
}


export default InfoPage;
import styled from "styled-components";

import NavBar from "../../../src/components/NavBar/NavBar";

const Body = styled.div`
    background-color: ${props => props.theme.colors.gray};
    min-height: 100vh;
`


const InfoPage = () => {
    return (
        <>
            <NavBar/>
            <Body/>
        </>
    )
    
}


export default InfoPage;
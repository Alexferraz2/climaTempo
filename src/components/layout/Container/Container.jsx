import styled from "styled-components";

const StyledContainer = styled.div`
    padding: 0 15px;
    margin: 0;
    width: 100%;

    @media (min-width: 768px) {
        width: 90%;
    }

    @media(min-width: 1500px) {
        width: 1440px;
    }
`

const Container = ( { children} ) => {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}


export default Container;
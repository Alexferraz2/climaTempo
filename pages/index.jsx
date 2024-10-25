import styled from 'styled-components'

import BackgroundImageWithChildren from '../src/components/backgroundImageWiyhChildren/BackgroundImageWithChildren'



const StyleDiv = styled.div`
    background-color: ${props => props.theme.colors.white};   
    
    *{
    padding: 0;
    margin: 0;
}  
    
`



export const Home = () => {
    return (
        <BackgroundImageWithChildren>
            <StyleDiv>
                <h1>Hello world!!!</h1>
            </StyleDiv>


        </BackgroundImageWithChildren>
        
    )
}

export default Home;
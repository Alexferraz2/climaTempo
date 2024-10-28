import styled from 'styled-components'

import BackgroundImageWithChildren from '../src/components/backgroundImageWiyhChildren/BackgroundImageWithChildren'
import Logo from '../src/components/logo/Logo'



const StyleDiv = styled.div`
    background-color: ${props => props.theme.colors.white};   
    min-width: 500px;  
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 40px;
    
    @media (max-width: 500px) {
        min-width: 100%;
    }

`



export const Home = () => {
    return (
        <BackgroundImageWithChildren>
            <StyleDiv>
                <Logo showImage={true} type='vertical'/>
                <input type="text" />
                
            </StyleDiv>


        </BackgroundImageWithChildren>
        
    )
}

export default Home;
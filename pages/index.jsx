import styled from 'styled-components'

import BackgroundImageWithChildren from '../src/components/backgroundImageWiyhChildren/BackgroundImageWithChildren'
import Logo from '../src/components/logo/Logo'
import InputWithSugestions from '../src/components/Form/InputWithSugestions/InputWithSugestions'



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

const StyledInput = styled(InputWithSugestions)`    
    box-sizing: border-box;
    
`

const InputContainer = styled.div`
    @media(min-width: 750px) {
        width: 150%;
        z-index: 10;
    }
    
    
`



export const Home = () => {
    return (
        <BackgroundImageWithChildren>
            <StyleDiv>
                <Logo showImage={true} type='vertical'/>
                <InputContainer>
                    <StyledInput placeholder='Digite a sua cidade'/>
                </InputContainer>
                
                
            </StyleDiv>


        </BackgroundImageWithChildren>
        
    )
}

export default Home;
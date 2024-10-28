import styled from 'styled-components'


const VerticalText = styled.h1`
    font-size: 80px;
    color: ${props => props.theme.colors.black};
    display: flex;
    flex-direction: column;
    line-height: 70px;
    margin-left: 150px;
    margin-top: -80px;
    
    
`

const PrimaryColor = styled.span`
    color: ${props => props.theme.colors.primary};
`

const Logo = ({showImage, type}) => {
    return(
        <div>
            {showImage && <img src='/woman.svg'/>}
            {type === 'vertical' && 
                <VerticalText>Clima  <PrimaryColor> Dev</PrimaryColor></VerticalText>
            }
        </div>
    )
}

export default Logo;
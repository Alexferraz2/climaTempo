import styled from 'styled-components'

const StyledImage = styled.div`
    background-image: url('${props => props.image}');
    background-position: right;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    min-height: 100vh;
    
`

const StyledContainer = styled.div`
    display: flex;
`

const BackgroundImageWithChildren = ( {children, image} ) =>  {
    return (
        <StyledContainer>
            {children}
            <StyledImage image={image}/>
        
        
        </StyledContainer>
            
            
        
    )
}

BackgroundImageWithChildren.defaultProps = {
    image: '/background.png'
}

export default BackgroundImageWithChildren;
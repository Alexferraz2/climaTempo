import styled from 'styled-components'

import Input from '../Input/Input'

const SugestionsContainer = styled.div`
    margin-top: 10px;
    background-color: ${props => props.theme.colors.white};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);    
`

const Sugestions = styled.div`
    padding: 10px;
    cursor: pointer;

    &:hover {
        background-color: #e4e4e4;
    }
`


const InputWithSugestions = ( {sugestions, placeholder, className } ) => {
    return (
        <>
            
            <Input className={className} placeholder={placeholder} />
            <SugestionsContainer>
                {sugestions.map((sugestion, id) => 
                    <Sugestions 
                    onClick={sugestion.onclick}
                    key={`sugestion-${id}`}>
                    
                        
                        {sugestion.text}</Sugestions>
                )}
            </SugestionsContainer>
        </>
        
    )
}

InputWithSugestions.defaultProps = {
    sugestions: [
        {text: 'Seestão 1', onclick: () => {}},
        {text: 'Seestão 2', onclick: () => {}}

    ]
}   


export default InputWithSugestions;
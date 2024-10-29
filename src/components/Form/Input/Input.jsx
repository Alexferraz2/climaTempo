import styled from 'styled-components'

const StyledInput = styled.input`
    background-color: #F6F6F6;
    border: 0;
    outline: none;
    padding: 20px;
    color: #9C9C9C;
    font-weight: bold;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    width: 100%;
    
    
`

const Input = ({ placeholder, className, value, onChange} = props ) => {
    return (
        <StyledInput className={className} placeholder={placeholder} value={value} onChange={onChange}/>
    )
}


export default Input
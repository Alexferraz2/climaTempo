import styled from "styled-components";
import Container from "../layout/Container/Container";


const StyledFooter= styled.div`
    background-color: ${props => props.theme.colors.white};
    text-align: center;
    padding: 30px 0;
    font-weight: 400;
    font-size: 20px;
`
const Footer = () => {
    return (
        <StyledFooter>
            Criado por <b>Alexsandro Leandro</b> durante o <b>DevChalenge 01 - SejaDev</b>
        </StyledFooter>
    )
}


export default Footer;
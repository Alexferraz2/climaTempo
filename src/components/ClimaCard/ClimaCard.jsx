import styled from "styled-components";

const StyledClimaCard = styled.div`
    background-color: ${props => props.theme.colors.white};
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    width: 350px;
    padding: 15px;
    box-sizing: border-box;
    
`

const Title = styled.h6`
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    color: ${props => props.theme.colors.black};
    margin: 0;
    padding: 0;
`

const BasicInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const BasicInfoImg = styled.img`
    width: 100px;
    height: 100px;
`

const BasicInfoText = styled.div`
    flex: 1;
    text-align: center;
`

const InfoLine = styled.p`
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    padding: 0 15px;
`

const InfoTemperature = styled.span`
    font-weight: 700;

    ${props => props.blue && "color: #00C9F5"}
    ${props => props.red && "color: #FF0000"}
`

const ClimaCard = ({title, icon, description, temp, feels, min, max}) => {
    return (
        <StyledClimaCard>
            <Title>{title}</Title>
            <BasicInfo>
                <BasicInfoImg src={`http://openweathermap.org/img/wn/${icon}@2x.png`}/>
                <BasicInfoText>{description}</BasicInfoText>
            </BasicInfo>
            <InfoLine>
                Temperatura<InfoTemperature>{temp ? temp.toFixed() : "N/A"}º</InfoTemperature>                
            </InfoLine>
            <InfoLine>
                Sensação<InfoTemperature>{feels ? feels.toFixed() : "N/A"}º</InfoTemperature>                
            </InfoLine>
            <InfoLine>
                Mínima<InfoTemperature blue>{min ? min.toFixed() : "N/A"}º</InfoTemperature>                
            </InfoLine>
            <InfoLine>
                Máxima<InfoTemperature red>{max ? max.toFixed() : "N/A"}º</InfoTemperature>                
            </InfoLine>
        </StyledClimaCard>
    )
}


export default ClimaCard;
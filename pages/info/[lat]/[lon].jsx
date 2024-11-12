import styled from "styled-components";
import { useState, useEffect} from "react"
import { useRouter } from "next/router";

import NavBar from "../../../src/components/NavBar/NavBar";
import Container from "../../../src/components/layout/Container/Container";
import ClimaCard from "../../../src/components/ClimaCard/ClimaCard";
import Footer from "../../../src/components/Footer/Footer";

const Body = styled.div`
    background-color: ${props => props.theme.colors.gray};
    min-height: calc(100vh - 200px);
`
const Text = styled.p`
    font-size: 20px;
    padding: 0;
    margin: 0;
`

const CityName = styled.h2`
    font-size: 60px;
    padding: 0;
    margin: 0;
`
const Content = styled.div`
    padding: 10px 0;
`

const ClimaContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 15px;
    
`

const InfoPage = () => {
    const [currentInfo, setCurrentInfo] = useState()
    const [futureInfo, setFutureInfo] = useState()
    const router = useRouter()
    const { lat, lon} = router.query

    const fetchCurrentInfo = async () => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_OWM_KEY}&units=metric&lang=pt_br`)
        const json = await response.json()
        setCurrentInfo(json)
        
        
    }
    

    const fetchFutureInfo = async () => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_OWM_KEY}&units=metric&lang=pt_br`)
        const json = await response.json()
        setFutureInfo(json)
        
        
    }
    useEffect(() => {
        if(lat && lon) {
            fetchCurrentInfo()
            fetchFutureInfo()
        }
        
    }, [lat, lon])
    return (
        <>
            <NavBar/>
            <Body>
                <Container>
                    <Content>
                        <Text>Previsão do Tempo</Text>
                        <CityName>{currentInfo?.name}, {currentInfo?.sys.country}</CityName>
                    </Content>

                    <ClimaContainer>
                        <ClimaCard 
                            title='Agora'
                            icon={currentInfo?.weather[0]?.icon}
                            description={currentInfo?.weather?.[0]?.description}
                            temp={currentInfo?.main?.temp}
                            feels={currentInfo?.main?.feels_like}
                            min={currentInfo?.main?.temp_min}
                            max={currentInfo?.main?.temp_max}
                        />
                        
                        <ClimaCard 
                            title='Próximas 3 horas'
                            icon={futureInfo?.list[0].weather[0].icon}
                            description={futureInfo?.list[0].weather?.[0]?.description}
                            temp={futureInfo?.list[0].main?.temp}
                            feels={futureInfo?.list[0].main?.feels_like}
                            min={futureInfo?.list[0].main?.temp_min}
                            max={futureInfo?.list[0].main?.temp_max}
                        />

<ClimaCard 
                            title='Próximas 6 horas'
                            icon={futureInfo?.list[1].weather[0].icon}
                            description={futureInfo?.list[1].weather?.[0]?.description}
                            temp={futureInfo?.list[1].main?.temp}
                            feels={futureInfo?.list[1].main?.feels_like}
                            min={futureInfo?.list[1].main?.temp_min}
                            max={futureInfo?.list[1].main?.temp_max}
                        />
                    </ClimaContainer>
                                       
                </Container>  
            </Body>
            <Footer>
                
            </Footer>
            
            
        </>
    )
    
}


export default InfoPage;
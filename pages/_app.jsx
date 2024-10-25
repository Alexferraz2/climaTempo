import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from '../src/theme';

//Componente de estilo global
const GlobalStyle = createGlobalStyle`
    html, body{
        background-color: ${props => props.theme.colors.primary};
        padding: 0;
        margin: 0;
        
    }
`

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <Component {...pageProps} />    

        </ThemeProvider>
    )
        
    
  }

export default MyApp;
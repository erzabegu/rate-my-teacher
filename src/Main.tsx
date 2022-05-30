import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Routing from './routes';

const Main = () => {
    return <>
        <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
            <BrowserRouter>
                <Routing />
            </BrowserRouter>
        </ThemeProvider>
    </>
}

export default Main;
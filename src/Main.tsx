import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Routing from './routes';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Main = () => {
    return <>
        <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
            <BrowserRouter>
                {/* <AnimationOnScroll animateIn="animate__tada"> */}
                    <Routing />
                {/* </AnimationOnScroll> */}
            </BrowserRouter>
        </ThemeProvider>
    </>
}

export default Main;
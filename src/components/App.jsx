import { Route, Routes } from 'react-router-dom';
import { Header } from './Header/Header';
import { About } from '../pages/About';
import { Contacts } from '../pages/Contacts';
import { Products } from '../pages/Products';
import { Services } from '../pages/Services';
import { Home } from '../pages/Home';

export const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="*" element={<Home/>}/>
                <Route path="/about" element={<About/>} />
                <Route path="/contacts" element={<Contacts/>} />
                <Route path="/products" element={<Products/>} />
                <Route path="/services" element={<Services/>} />
            </Routes>
        </>
    )
};
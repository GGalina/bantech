import s from './Logo.module.scss';
import { NavLink } from 'react-router-dom';
import logoImage from '../../../assets/images/logo.png';

export const Logo = () => {
    return (
        <NavLink className={s.logoContainer} to={"/"}>
            <img src={logoImage} alt="Logo" className={s.logoImage}></img>
            <h2 className={s.logoText}>BanTech</h2>
        </NavLink>
    )
};
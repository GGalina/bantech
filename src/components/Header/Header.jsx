import { Logo } from './Logo/Logo';
import { Navigation } from './Navigation/Navigation';
import s from './Header.module.scss'

export const Header = () => {
    return (
        <div className={s.Container}>
            <Logo />
            <Navigation />
        </div>


    )
}
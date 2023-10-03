import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';
import s from './Navigation.module.scss';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle('no-scroll');
  };

  const handleCloseClick = () => {
    setIsOpen(false);
    document.body.classList.remove('no-scroll');
  };

  const handleNavLinkClick = () => {
    if (isMobile) {
      setIsOpen(false);
      document.body.classList.remove('no-scroll');
    }
  };

  return (
    <>
      {isMobile && !isOpen && (
        <div className={s.BurgerMenu} onClick={handleMenuClick}>
          <RxHamburgerMenu className={s.BurgerIcon} />
        </div>
      )}
      
      {isMobile && isOpen && (
        <div className={s.MobileMenu} >
          <div className={s.CloseContainer} onClick={handleCloseClick}>
            <AiOutlineClose className={s.CloseIcon} />
          </div>
          <div className={s.MobileMenuLinks}>
            <NavLink className={ ({ isActive }) => isActive ? s.ActiveLink : s.Link} to="/about" onClick={handleNavLinkClick}>About</NavLink>
            <NavLink className={ ({ isActive }) => isActive ? s.ActiveLink : s.Link} to="/services" onClick={handleNavLinkClick}>Services</NavLink>
            <NavLink className={ ({ isActive }) => isActive ? s.ActiveLink : s.Link} to="/products" onClick={handleNavLinkClick}>Products</NavLink>
            <NavLink className={ ({ isActive }) => isActive ? s.ActiveLink : s.Link} to="/contacts" onClick={handleNavLinkClick}>Contacts</NavLink>
          </div>
        </div>
      )}
      
      {!isMobile && (
        <div className={s.DesktopMenu}>
          <NavLink className={ ({ isActive }) => isActive ? s.ActiveLink : s.Link} to="/about">About</NavLink>
          <NavLink className={ ({ isActive }) => isActive ? s.ActiveLink : s.Link} to="/services">Services</NavLink>
          <NavLink className={ ({ isActive }) => isActive ? s.ActiveLink : s.Link} to="/products">Products</NavLink>
          <NavLink className={ ({ isActive }) => isActive ? s.ActiveLink : s.Link} to="/contacts">Contacts</NavLink>
        </div>
      )}
    </>
  );
};

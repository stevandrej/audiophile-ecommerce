/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styles from './navBar.module.scss';
import logo from '../../assets/icons/logo.svg';
import cartIcon from '../../assets/icons/icon-cart.svg';
import Menu from '../../components/Menu/Menu';


const NavBar = () => {

	return <div className={styles.navSection}>
		<div className={`wrapper ${styles.navBar}`}>
			<a href="/" className={styles.logo}><img src={logo} alt='Logo' /></a>
			<nav className={styles.navigation}>
				<Menu />
			</nav>
			<img src={cartIcon} alt='cart' className={styles.cart} />
		</div>
	</div>
}

export default NavBar;
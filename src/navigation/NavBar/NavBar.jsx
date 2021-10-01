import React, { useState } from 'react';
import styles from './navBar.module.scss';
import logo from '../../assets/icons/logo.svg';
import cartIcon from '../../assets/icons/icon-cart.svg';
import Menu from '../../components/Menu/Menu';
import ModalCart from '../../components/ModalCart/ModalCart';
import { Link } from 'react-router-dom';


const NavBar = () => {

	const [modalOpen, setModalOpen] = useState(false);

	return <div className={styles.navSection}>
		<div className={`wrapper ${styles.navBar}`}>
			<Link to="/" className={styles.logo}><img src={logo} alt='Logo' /></Link>
			<nav className={styles.navigation}>
				<Menu />
			</nav>
			<img src={cartIcon} alt='cart' className={styles.cart} onClick={()=>setModalOpen(!modalOpen)}/>
			{ modalOpen && <ModalCart open={setModalOpen}/>}
		</div>
	</div>
}

export default NavBar;
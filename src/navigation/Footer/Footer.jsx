/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Menu from '../../components/Menu/Menu';
import styles from './footer.module.scss';
import logo from '../../assets/icons/logo.svg';
import facebookIcon from '../../assets/icons/icon-facebook.svg';
import instagramIcon from '../../assets/icons/icon-instagram.svg';
import twitterIcon from '../../assets/icons/icon-twitter.svg';

const Footer = () => {
	return <footer>
		<div className={`wrapper ${styles.footerContainer}`}>
			
			{/* Footer TOP - MENU */}
			<div className={`row ${styles.footerNavbar}`}>
				<div className={`col-6 ${styles.footerLogo}`}>
					<img src={logo} alt='logo' />
				</div>
				<div className={`col-6 ${styles.footerNavMenu}`}>
					<Menu />
				</div>
			</div>

			{/* Footer MIDDLE - CONTENT*/}
			<div className='row col-gap'>
				<div className={`col-6 ${styles.content}`}>
					<p>
						Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers
						and sound specialists who are devoted to helping you get the most out of personal audio. Come and
						visit our demo facility - we’re open 7 days a week.
					</p>
				</div>
				<div className={`col-6 ${styles.socialmedia}`}>
					<ul className={styles.socialmediaIcons}>
						<li><a href='#'><img src={facebookIcon} alt='facebook icon' /></a></li>
						<li><a href='#'><img src={twitterIcon} alt='twitter icon' /></a></li>
						<li><a href='#'><img src={instagramIcon} alt='instagram icon' /></a></li>
					</ul>
				</div>
			</div>

			{/*Footer Bottom - COPYRIGHT*/}
			<div className={`row ${styles.copyright}`}>Copyright 2021. All Rights Reserved</div>
		</div>
	</footer >
}

export default Footer;
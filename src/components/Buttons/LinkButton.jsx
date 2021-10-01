import React from 'react';
import styles from './button.module.scss';
import IconArrow from '../../assets/icons/icon-arrow-right.svg';
import { Link } from 'react-router-dom';

const LinkButton = ({ variant = 'primary', href, click, children }) => {

	return <Link className={`${styles.btn} ${styles[variant]}`} to={href} onClick={click}>
		{children}
		{/* Arrow icon > for tertiary variant button */}
		{variant === 'tertiary' && <img className={styles.arrow} src={IconArrow} alt='arrow' />}
	</Link>
}

export default LinkButton;
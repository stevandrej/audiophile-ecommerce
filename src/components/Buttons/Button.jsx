import React from 'react';
import styles from './button.module.scss';
import IconArrow from '../../assets/icons/icon-arrow-right.svg';

const Button = ({ variant = 'primary', click, children }) => {

	return <button className={`${styles.btn} ${styles[variant]}`} onClick={click && click}>
		{children}
		{/* Arrow icon > for tertiary variant button */}
		{variant === 'tertiary' && <img className={styles.arrow} src={IconArrow} alt='arrow' />}
	</button>
}

export default Button;
import React from 'react';
import styles from './menu.module.scss';

const Menu = () => {

	const renderMenuItems = () => {
		const menuItems = ['Home', 'Headphones', 'Speakers', 'Earphones'];

		const menu = menuItems.map(item =>
			<li key={item}>{item}</li>
		);
		return menu;
	}

	return <ul className={styles.menu}>
		{renderMenuItems()}
	</ul>
}

export default Menu;
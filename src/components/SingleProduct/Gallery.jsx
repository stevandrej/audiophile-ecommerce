import React from 'react';
import styles from './Gallery.module.scss';

const Gallery = ({images}) => {
	return (
		<div className={styles.gallery}>
			<img id={styles.img1} src={window.location.origin + '/' + images.first.desktop} alt='img 1' />
			<img id={styles.img2} src={window.location.origin + '/' + images.second.desktop} alt='img 2' />
			<img id={styles.img3} src={window.location.origin + '/' + images.third.desktop} alt='img 3' />
		</div>
	)
}

export default Gallery;
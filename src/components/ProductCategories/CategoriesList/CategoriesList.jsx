import React from 'react';
import CategoryItem from '../CategoryItem/CategoryItem';
import './CategoriesList.scss';

const CategoriesList = ({ categories, ...props }) => {
	return <ul className='categories'>
		{categories.map(category => <li key={category.name}>
			<CategoryItem
				categoryImage={category.categoryImage}
				categoryName={category.categoryName}
				link={category.link}
			/>
		</li>
		)}
	</ul>
}

export default CategoriesList;
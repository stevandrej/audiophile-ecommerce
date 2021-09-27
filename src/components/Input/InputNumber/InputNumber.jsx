import React, { useState } from 'react';
import styles from './InputNumber.module.scss';

const InputNumber = ({value}) => {

	const [inputValue, setInputValue] = useState(value ? value : 1);

	return(
		<input type='number' className={styles.inputNumber} min='1' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
	)
}

export default InputNumber;
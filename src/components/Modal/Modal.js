import React, { useState } from 'react'
import './style.css'
export const Modal = () => {
	const [count, setCount] = useState(0)
	return (
		<button
			onClick={() => {
				setCount(count + 1)
			}}
		>
			{count}
		</button>
	)
}

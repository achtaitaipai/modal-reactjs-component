import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import './style.css'

export const Modal = forwardRef(({ title, onClose, onConfirm, children, confirmBtn }, ref) => {
	const [isOpen, setIsOpen] = useState(false)
	const dialogRef = useRef()
	const closeBtnRef = useRef()
	const confirmBtnRef = useRef()
	const close = (confirm = false) => {
		setIsOpen(false)
		if (confirm) {
			if (onConfirm) onConfirm()
			else if (onClose) onClose()
		} else {
			if (onClose) onClose()
		}
	}
	useImperativeHandle(ref, () => ({
		open() {
			setIsOpen(true)
			if (closeBtnRef.current) {
				closeBtnRef.current.focus()
			}
		},
	}))

	useEffect(() => {
		const handleClickOutside = e => {
			if (dialogRef.current && !dialogRef.current.contains(e.target) && isOpen) {
				close()
				e.preventDefault()
			}
		}
		document.addEventListener('click', handleClickOutside, true)
		return () => {
			document.removeEventListener('click', handleClickOutside, true)
		}
	}, [isOpen])

	const handleKeyLast = e => {
		if (e.code === 'Tab' && !e.shiftKey) {
			e.preventDefault()
			closeBtnRef.current.focus()
		}
	}
	const handleKeyFirst = e => {
		if (e.code === 'Tab' && e.shiftKey) {
			e.preventDefault()
			confirmBtnRef.current.focus()
		}
	}

	const handleKeyDown = e => {
		if (e.code === 'Escape') {
			e.preventDefault()
			close()
		}
	}
	if (!isOpen) return null

	return (
		<div className="modal" onKeyDown={handleKeyDown}>
			<div role="dialog" className="modal__content" aria-labelledby="dialogTitle" aria-describedby="dialogDesc" ref={dialogRef}>
				<header className="modal__header">
					<h2 id="dialogTitle">{title}</h2>
					<button type="button" className="modal__closeBtn" onClick={() => close(false)} ref={closeBtnRef} autoFocus onKeyDown={handleKeyFirst}>
						<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
							<line x1="0" y1="0" x2="10" y2="10" stroke="black" strokeLinecap="round" strokeWidth="2" />
							<line x1="10" y1="0" x2="0" y2="10" stroke="black" strokeLinecap="round" strokeWidth="2" />
						</svg>
					</button>
				</header>
				<div className="modal__desc">{children}</div>

				{confirmBtn && (
					<button type="button" onClick={() => close(true)} onKeyDown={handleKeyLast} ref={confirmBtnRef}>
						{confirmBtn}
					</button>
				)}
			</div>
		</div>
	)
})

import React from 'react'
import { useRef } from 'react'
import { storiesOf } from '@storybook/react'

import { Modal } from '../components/Modal'

const stories = storiesOf('APP Test', module)
stories.add('App', () => {
	const modalRef = useRef()
	return (
		<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center', gap: '1.5rem', padding: '5rem' }}>
			<button onClick={() => modalRef.current.open()}>ouvrir</button>

			<Modal ref={modalRef} title="titre" message={'message'} onClose={() => console.log('close')} onConfirm={() => console.log('confirm')} />
		</div>
	)
})

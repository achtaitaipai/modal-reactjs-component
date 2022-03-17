## A small but functional npm package

### Install

    npm install modal-reactjs-component

### Usage

```jsx
import { useRef } from 'react'
import Modal from 'Modal'

function App() {
	const modalRef = useRef()
	return (
		<div>
			<button onClick={() => modalRef.current.open()}>ouvrir</button>

			<Modal ref={modalRef} title="titre" message={'message'} onClose={() => console.log('close')} onConfirm={() => console.log('confirm')} confirmBtn={'Ok'}>
				<p>Content of the modal</p>
			</Modal>
		</div>
	)
}

export default App
```

#### Props

| Name       | Type       | Description                                          |
| ---------- | ---------- | ---------------------------------------------------- |
| title      | 'String'   | Modal's title                                        |
| confirmBtn | 'String'   | Confirm button's content                             |
| onClose    | 'Function' | Function to execute when the user closes the modal   |
| onConfirm  | 'Function' | Function to execute when the user confirms the modal |

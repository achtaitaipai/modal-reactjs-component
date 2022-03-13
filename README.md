## A small but functional npm package

### Install

    npm install modal-reactjs-component

### Usage

    import { useRef } from 'react'
    import Modal from './lib/components/Modal'
    import './App.css'

    function App() {
        const modalRef = useRef()
        return (
            <div>
                <button onClick={() => modalRef.current.open()}>ouvrir</button>

                <Modal ref={modalRef} title="titre" message={'message'} onClose={() => console.log('oe')} />
            </div>
        )
    }

    export default App

#### Props

| Name    | Type       |
| ------- | ---------- |
| title   | 'String'   |
| message | 'String'   |
| onClose | 'Function' |

import React from 'react'
import Aux from '../../hoc/hoc'
import './Layout.css'

export default function Layout(props) {
  return (
    <Aux>
        <div>Toolbar, sideDrawer, Backdrop</div>
        <main className='content'>
            {props.children}
        </main>
    </Aux>
  )
}

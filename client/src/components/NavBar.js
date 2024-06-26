import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <Link to="/" className='navbar-brand'>MERN - Todo App</Link>
            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#myNavbar' aria-controls='navbarSupportedContent' aria-expanded="false" aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='myNavbar'>
                <ul className='navbar-nav mr-auto'>
                    <li className='navbar-item'>
                        <Link to="/" className='nav-link'>Todos</Link>
                    </li>
                    <li className='navbar-item'>
                        <Link to="/create" className='nav-link'>Add Todo</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
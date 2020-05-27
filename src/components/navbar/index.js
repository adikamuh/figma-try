import React, {Component} from 'react'
import './navbar.scss'

import logo from '../../assets/logo-header.png'
import icon from '../../assets/right-arrow-purple.png'

class Navbar extends Component {
    render(){
        return(
            <div className='nav-container'>
                <div className='wrapper'>
                    <nav>
                        <img src={logo} className='logo' alt='Icon'></img>
                        <ul>
                            <li className='active'>About</li>
                            <li>Help</li>
                            <li>Features</li>
                            <li>Signup</li>
                        </ul>
                        <a className='btn-secondary' href='google.com'>Request Demo<img src={icon} alt=''></img></a>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Navbar
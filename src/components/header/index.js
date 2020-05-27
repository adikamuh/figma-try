import React, {Component} from 'react'

import './header.scss'

import img from '../../assets/header-illustration.png'

class Header extends Component{
    render(){
        return(
            <div className='container-header' style={{backgroundImage: 'url('+img+')'}}>
                <div className='wrapper-header'>
                    <div className='header-content'>
                        <h1>Save your data storage here.</h1>
                        <p>Data Warehouse is a data storage area that has been tested for security, so you can store your data here safely but not be afraid of being stolen by others.</p>
                        <a href='blabla.com' className='btn-primary'>Learn more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header
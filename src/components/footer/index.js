import React, {Component} from 'react'
import'./footer.scss'

import arrow from '../../assets/right-arrow-purple.png'
import logo from '../../assets/logo-header.png'
import sm from '../../assets/SM.png'
import chatBtn from '../../assets/chat-button.png'

class Footer extends Component{
    render(){
        return(
            <div className='container-footer'>
                <div className='wrapper-footer'>
                    <div className='upper-footer'>
                        <div className='container-text'>
                            <h1>Try for free!</h1>
                            <p>Get limited 1 week free try our features!</p>
                        </div>
                        <div className='container-button'>
                            <a className='btn-primary'>Learn more</a>
                            <a className='btn-secondary'>Request Demo<img src={arrow} alt=''></img></a>
                        </div>
                    </div>

                    <div className='main-footer'>
                        <div className='col-profile'>
                            <div className='logo'>
                                <img src={logo}></img>
                                <span>DataWarehouse</span>
                            </div>
                            <div className='address'>
                                <span>Warehouse Society, 234</span>
                                <br></br>
                                <span>Bahagia Ave Street PRBW 29281</span>
                            </div>
                            <div className='contact'>
                                <small>info@warehouse.project</small>
                                <br></br>
                                <small>1-232-3434(Main)</small>
                            </div>
                        </div>

                        <div className='col-about'>
                            <ul>
                                <li className='item-header'>About</li>
                                <li>Profile</li>
                                <li>Features</li>
                                <li>Help</li>
                                <li>Social Media</li>
                            </ul>
                        </div>

                        <div className='col-help'>
                            <ul>
                                <li className='item-header'>Help</li>
                                <li>Support</li>
                                <li>Sign up</li>
                                <li>Guide</li>
                                <li>Reports</li>
                                <li>Q&A</li>
                            </ul>
                        </div>

                        <div className='col-social'>
                            <ul>
                                <li className='item-header'>Social Media</li>
                                <li><img src={sm}></img></li>
                            </ul>
                        </div>
                    </div>

                    <div className='copyright-footer'>
                        <div className='copyright'>
                            <small>© Datawarehouse™, 2020. All rights reserved.</small>
                            <br></br>
                            <small>Company Registration Number: 21479524.</small>
                        </div>
                        <div className='chat'>
                            <a href='adafs.com'><img src={chatBtn} alt=''></img></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
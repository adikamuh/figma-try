import React, {Component} from 'react'
import './description.scss'

import illustration from '../../assets/illustration2.png'

class Description extends Component{
    constructor(){
        super()
        console.log(illustration)
    }

    render(){
        return(
            <div className='container-description'>
                <div className='wrapper-description'>
                    <div className='description-img'>
                        <img src={illustration} alt='illustration'></img>
                    </div>
                    <div className='description-content'>
                        <h2>We are a high-level data storage bank</h2>
                        <p>The place to store various data that you can access at any time through the internet  and where you can carry it. </p>
                        <p>This very flexible storage area has a high level of security. To enter into your own data you must enter the password that you created when you registered in this Data Warehouse. </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Description
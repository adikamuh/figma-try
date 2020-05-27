import React, {Component} from 'react'

import './featuresDetails.scss'
import arrow from '../../assets/right-arrow-purple.png'

class FeaturesDetails extends Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <div className='container-features-details' style={{backgroundImage: 'url('+this.props.bgImg+')'}}>
                <div className='img'>
                    <img src={this.props.illustration} alt=''></img>
                </div>
                <div className='content'>
                    <h4>{this.props.title}</h4>
                    <p>{this.props.content}</p>
                    <a href='goasdl.com'>Learn more <img src={arrow} alt=''></img> </a>
                </div>
            </div>
        )
    }
}

export default FeaturesDetails
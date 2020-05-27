import React, {Component} from 'react'

import './testimonialsComponent.scss'
import profpic from '../../assets/prof1.png'

class TestimonialsComponents extends Component{
    render(){
        return(
            <div className='container-testi-component'>
                <div className='wrapper-testi'>
                    <div className='profile-pic'>
                        <img src={profpic} alt=''></img>
                    </div>
                    <div className='content'>
                        <h5>John Fang</h5>
                        <small>wordfang.com</small>
                        <p>Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default TestimonialsComponents
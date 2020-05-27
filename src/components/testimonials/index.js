import React, {Component} from 'react'

import './testimonials.scss'
import rightArrow from '../../assets/right-arrow.png'
import leftArrow from '../../assets/left-arrow.png'
import TestimonialsComponents from '../testimonials-component'

import Carousel, { Dots } from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

class Testimonials extends Component{
    constructor(){
        super()
        this.state = {
            value: 0,
            slides: [
                (<TestimonialsComponents />),
                (<TestimonialsComponents />),
                (<TestimonialsComponents />),
            ],
        }
        this.onchange = this.onchange.bind(this)
    }

    onchange(value){
        this.setState({ value })
    }

    render(){
        return(
            <div className='container-testimonials'>
                <div className='wrapper-testimonials'>
                    <div className='header-testimonials'>
                        <h1>Testimonials</h1>
                    </div>
                    <div className='content-testimonials'>
                        <Carousel
                            arrowLeft={<img src={leftArrow}></img>}
                            arrowRight={<img src={rightArrow}></img>}
                            addArrowClickHandler
                            slidesPerPage={2}
                            itemWidth={600}
                            draggable
                            keepDirectionWhenDragging
                            centered
                            arrows
                            dots
                        >
                            <TestimonialsComponents />
                            <TestimonialsComponents />
                            <TestimonialsComponents />
                        </Carousel>
                    </div>
                    {/* <div className='legend-testimonials'>
                        <div className='indicator'>
                            ...
                        </div>
                        <div className='btn'>
                            <button className='arrow-left'><img src={leftArrow}></img></button>
                            <button className='arrow-right'><img src={rightArrow}></img></button>
                        </div>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default Testimonials
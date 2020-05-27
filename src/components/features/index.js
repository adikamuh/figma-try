import React, {Component} from 'react'
import FeaturesDetails from '../features-details'

import './features.scss'

import featuresData from '../../datas/featuresData'

class Features extends Component{
    render(){
        const featuresComponents = featuresData.map(
            feature => <FeaturesDetails key={feature['id']} bgImg={feature['bg-img']} illustration={feature['illustration']} title={feature['title']} content={feature['content']}  />
        )
        
        return(
            <div className='container-features'>
                <div className='features-description'>
                    <h2>Features</h2>
                    <p>Some of the features and advantages that we provide for those of you who store data in this Data Warehouse.</p>
                </div>

                <div className='features-content'>
                    {featuresComponents}
                </div>
            </div>
        )
    }
}

export default Features
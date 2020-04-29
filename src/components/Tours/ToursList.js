import React from 'react'
import PropTypes from 'prop-types'
import styles from '../../css/items.module.css'
import Tour from './Tour'
import Title from '../Title'

class TourList extends React.Component {
    state = {
        tours: [],
        sortedTours: []
    }

    componentDidMount(){
        this.setState({
            tours: this.props.tours.tours.edges,
            sortedTours: this.props.tours.tours.edges
        })
    }
    render () {
        return(
            <section className={styles.tours}>
                <Title title="our" subtitle="tours"/>
                <div className={styles.center}>
                    {this.state.sortedTours.map(({node})=>{
                        return(
                            <Tour key={node.contentful_id} tour={node}/>
                        )
                    })}
                </div>
            </section>
        )
    }
}

export default TourList;

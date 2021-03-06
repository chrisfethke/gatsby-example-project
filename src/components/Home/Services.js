import React from 'react'
import PropTypes from 'prop-types'
import services from '../../constants/services'
import styles from '../../css/services.module.css'
import Title from '../Title'


const Services = (props) => {
    return (
        <section className={styles.services}>
            <Title title="our" subtitle="services"/>
            <div className={styles.center}>
            {
                services.map((item,index) => {
                    return(
                        <article key={index} className={styles.service}>
                            <span>{item.icon}</span>
                            <h4>{item.title}</h4>
                            <p>{item.text}</p>
                        </article>
                    )
                })
            }
            </div>

        </section>
    )
}

export default Services

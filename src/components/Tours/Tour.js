import React from 'react'
import PropTypes from 'prop-types'
import Image from 'gatsby-image'
import styles from '../../css/tour.module.css'
import { FaMap } from 'react-icons/fa'
import AniLink from "gatsby-plugin-transition-link/AniLink"


const Tour = (props) => {
    const {name, price, country, slug, days, images} = props.tour;
    let mainImage = images[0].fluid;
    return (
        <article className={styles.tour}>
            <div className={styles.imgContainer}>
                <Image fluid={mainImage} className={styles.img}/>
                <AniLink className={styles.link} fade to={`/tours/${slug}`}>
                    details
                </AniLink>
            </div>
            <div className={styles.footer}>
                <h3>{name}</h3>
                <div className={styles.info}>
                    <h4 className={styles.country}>
                        <FaMap className={styles.icon}/>
                        {country || "default country"}
                    </h4>
                    <div className={styles.details}>
                        <h6>{days} days</h6>
                        <h6>from {price}</h6>
                    </div>
                </div>
            </div>
        </article>
    )
}

Tour.propTypes = {
    tour:PropTypes.shape({
        name:PropTypes.string.isRequired,
        country:PropTypes.string.isRequired,
        price:PropTypes.number.isRequired,
        days:PropTypes.number.isRequired,
        images:PropTypes.arrayOf(PropTypes.object).isRequired
    })
}

export default Tour

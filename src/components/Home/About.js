import React from 'react'
import PropTypes from 'prop-types'
import Title from '../Title'
import styles from '../../css/about.module.css'
import img from '../../images/defaultBcg.jpeg'

const About = (props) => {
    return (
        <section className={styles.about}>
            <Title title="about" subtitle="us"/>
            <div className={styles.aboutCenter}>
                <article className={styles.aboutImg}>
                    <div className={styles.imgContainer}>
                        <img src={img} alt="about company"/>
                    </div>
                </article>
                <article className={styles.aboutInfo}>
                    <h4>Explore the difference!</h4>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua."
                    </p>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua."
                    </p>
                    <button type="button" className="btn-primary">read more</button>
                </article>
            </div>
        </section>
    )
}

export default About

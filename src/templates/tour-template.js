import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import styles from '../css/template.module.css'
import Img from 'gatsby-image'
import {FaMoneyBillWave, FaMap} from 'react-icons/fa'
import Day from '../components/SingleDay/Day'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SEO from '../components/SEO'


const TourTemplate = (props) => {
    const {
        name,
        price,
        country,
        days,
        start,
        description:{description},
        journey,
        images
    } = props.data.contentfulTour;

    const [mainImage,...tourImages] = images;

    return (
        <Layout>
            <SEO title={name}/>
            <StyledHero img={mainImage.fluid}/>
            <section className={styles.template}>
                <div className={styles.center}>
                    <div className={styles.images}>
                        {tourImages.map((item) => {
                            return (
                                <Img
                                key={item.contentful_id}
                                fluid={item.fluid}
                                alt="single tour"
                                className={styles.image}/>
                            )
                        })}
                    </div>
                    <h2>{name}</h2>
                    <div className={styles.info}>
                        <p>
                            <FaMoneyBillWave className={styles.icon}/>
                            starting from ${price}
                        </p>
                        <p>
                            <FaMap className={styles.icon}/>
                            {country}
                        </p>
                    </div>
                    <h4>Starting on: {start}</h4>
                    <h4>Duration: {days}</h4>
                    <p className={styles.desc}>{description}</p>
                    <div className={styles.journey}>
                        {journey.map((item)=> {
                            return(
                                <Day
                                key={item.contentful_id}
                                day={item.day}
                                info={item.info}
                                />
                            )
                        })}
                    </div>
                    <AniLink fade to='/tours' className='btn-primary'>
                        back to tours
                    </AniLink>
                </div>
            </section>
        </Layout>
    )
}

export const query = graphql`
    query($slug:String!){
        contentfulTour(slug:{eq:$slug}){
            name
            price
            country
            days
            start(formatString:"dddd MMMM Do, YYYY")
            description{
                description
            }
            journey{
                day
                info
            }
            images{
                fluid{
                    ...GatsbyContentfulFluid
                }
            }
        }
    }
`

export default TourTemplate

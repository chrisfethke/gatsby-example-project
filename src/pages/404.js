import React from 'react'
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import styles from '../css/error.module.css'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SEO from '../components/SEO'

const Error = () => {
    return (
        <Layout>
            <SEO title="Error"/>
            <div className={styles.error}>
                <Banner title="Oops! This is a dead end.">
                    <AniLink fade to='/' className='btn-white'>
                        Head Back Home.
                    </AniLink>
                </Banner>
            </div>
        </Layout>
    )
}

export default Error

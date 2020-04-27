import React from 'react'
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import styles from '../css/error.module.css'
import { Link } from 'gatsby'

const Error = () => {
    return (
        <Layout>
            <div className={styles.error}>
                <Banner title="Oops! This is a dead end.">
                    <Link to='/' className='btn-white'>
                        Head Back Home.
                    </Link>
                </Banner>
            </div>
        </Layout>
    )
}

export default Error

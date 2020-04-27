import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import SimpleHero from '../components/SimpleHero'
import Banner from '../components/Banner'
import About from '../components/Home/About'
import Services from '../components/Home/Services'


export default () => (
    <Layout>
        <SimpleHero>
            <Banner
                title="Let's Go Explore!"
                info="Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.">
                <Link to='/tours' className='btn-white'>
                    See Tours
                </Link>
            </Banner>
        </SimpleHero>
        <About />
        <Services/>
    </Layout>


)

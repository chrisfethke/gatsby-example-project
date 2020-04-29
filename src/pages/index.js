import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import About from '../components/Home/About'
import Services from '../components/Home/Services'
import {graphql} from 'gatsby'
import StyledHero from '../components/StyledHero'
import FeaturedTours from '../components/Home/FeaturedTours'
/*import SimpleHero from '../components/SimpleHero'*/
import SEO from '../components/SEO'


export default (props) => (
    <Layout>
        <SEO title="Home"/>
        <StyledHero img={props.data.heroImage.childImageSharp.fluid} home>
            <Banner
                title="Let's Go Explore!"
                info="Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.">
                <AniLink fade to='/tours' className='btn-white'>
                    See Tours
                </AniLink>
            </Banner>
        </StyledHero>
        <About />
        <Services/>
        <FeaturedTours/>
    </Layout>
)

export const query = graphql`
    query {
        heroImage:file(relativePath:{eq:"defaultBcg.jpeg"}){
            childImageSharp{
                fluid(quality: 90, maxWidth: 1920){
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`

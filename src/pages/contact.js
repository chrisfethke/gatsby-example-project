import React from 'react'
import Layout from '../components/Layout'
import HeaderExample from '../examples/Header.js'
import {graphql} from 'gatsby'
import StyledHero from '../components/StyledHero'
import Contact from '../components/Contact/Contact'
import SEO from '../components/SEO'


const contact = (props) => {
    return (
        <Layout>
            <SEO title='Contact'/>
            <StyledHero img={props.data.heroImage.childImageSharp.fluid}/>
            <Contact/>
        </Layout>
    )
}

export default contact

export const query = graphql`
    query {
        heroImage:file(relativePath:{eq:"connectBcg.jpeg"}){
            childImageSharp{
                fluid(quality: 90, maxWidth: 1920){
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`

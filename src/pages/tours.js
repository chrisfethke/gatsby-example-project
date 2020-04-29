import React from 'react'
import Layout from '../components/Layout'
import Button from '../examples/Button'
import { graphql } from 'gatsby'
import StyledHero from '../components/StyledHero'
import Tours from '../components/Tours/Tours'
import SEO from '../components/SEO'


const tours = (props) => {
    return (
        <Layout>
            <SEO title='Tours'/>
            <StyledHero img={props.data.heroImage.childImageSharp.fluid}/>
            <Tours/>
        </Layout>
    )
}

export default tours

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

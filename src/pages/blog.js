import React from 'react'
import Layout from '../components/Layout'
import {graphql} from 'gatsby'
import StyledHero from '../components/StyledHero'
import BlogList from '../components/Blog/BlogList'
import SEO from '../components/SEO'


const Blog = (props) => {
    return (
        <Layout>
            <SEO title='Blog'/>
            <div>
                <StyledHero img={props.data.heroImage.childImageSharp.fluid}/>
                <BlogList/>
            </div>
        </Layout>
    )
}

export default Blog

export const query = graphql`
    query {
        heroImage:file(relativePath:{eq:"blogBcg.jpeg"}){
            childImageSharp{
                fluid(quality: 90, maxWidth: 1920){
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`

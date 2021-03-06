import React from 'react'
import PropTypes from 'prop-types'
import BlogCard from './BlogCard'
import {useStaticQuery, graphql} from 'gatsby'
import Title from '../Title'
import styles from '../../css/blog.module.css'

const getPosts = graphql`
    query{
        posts:allContentfulPost(sort:{fields:published, order:DESC}){
            edges{
                node{
                    published(formatString:"MMMM Do, YYYY")
                    title
                    slug
                    id:contentful_id
                    image{
                        fluid{
                            ...GatsbyContentfulFluid
                        }
                    }
                }
            }
        }
    }
`

const BlogList = (props) => {
    const {posts} = useStaticQuery(getPosts);

    return (
        <section className={styles.blog}>
            <Title title='our' subtitle='blogs'/>
            <div className={styles.center}>
                {posts.edges.map(({node})=> {
                    return(
                        <BlogCard key={node.id} blog={node}/>
                    )
                })}
            </div>
        </section>
    )
}

export default BlogList

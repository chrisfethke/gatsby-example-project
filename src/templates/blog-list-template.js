import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styles from '../css/blog.module.css'
import BlogCard from '../components/Blog/BlogCard'
import Title from '../components/Title'
import SEO from '../components/SEO'



const BlogListTemplate = (props) => {
    const {data} = props;
    const {currentPage, numPages} = props.pageContext;
    const isFirst = currentPage===1;
    const isLast = currentPage===numPages;
    const nextPage = `/blogs/${currentPage+1}`
    const prevPage = currentPage-1 ===1?`/blogs`:`/blogs/${currentPage-1}`
    return (
        <Layout>
            <SEO title='Blogs'/>
            <section className={styles.blog}>
                <Title title="Blogs with" subtitle="pagination"/>
                <div className={styles.center}>
                    {data.posts.edges.map(({node})=>{
                    return(
                        <BlogCard key={node.id} blog={node}/>
                    )
                })}
                </div>
                <section className={styles.links}>
                    {
                        !isFirst &&(
                            <AniLink fade to={prevPage} className={styles.link}>
                            Prev
                            </AniLink>
                        )
                    }
                    {Array.from({length:numPages},(_,i)=>{
                        return(
                            <AniLink
                            fade to={`/blogs/${i===0?"":i+1}`}
                            className={i+1===currentPage
                                ?`${styles.link} ${styles.active}`
                                : `${styles.link}`}
                            key={i}>
                                {i+1}
                            </AniLink>
                        )
                    })}
                    {
                        !isLast &&(
                            <AniLink fade to={nextPage} className={styles.link}>
                            Next
                            </AniLink>
                        )
                    }
                </section>
            </section>
        </Layout>
    )
}

export const query = graphql`
    query($skip:Int!,$limit:Int!){
      posts:allContentfulPost(
        skip:$skip,limit:$limit,sort:{fields:published,order:DESC}){
        edges{
          node{
            slug
            title
            id:contentful_id
            published(formatString:"MMMM Do, YYYY")
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


export default BlogListTemplate

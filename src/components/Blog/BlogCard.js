import React from 'react'
import PropTypes from 'prop-types'
import styles from '../../css/blog-card.module.css'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Image from 'gatsby-image'


const BlogCard = (props) => {
    const blog = props.blog;
    return (
        <article className={styles.blog}>
            <div className={styles.imgContainer}>
                <Image
                fluid={blog.image.fluid}
                className={styles.img}
                alt='single image'
                />
                <AniLink fade className={styles.link} to={`/blog/${blog.slug}`}>
                read more
                </AniLink>
                <h6 className={styles.date}>{blog.published}</h6>
            </div>
            <div className={styles.footer}>
                <h4>{blog.title}</h4>
            </div>
        </article>
    )
}

export default BlogCard

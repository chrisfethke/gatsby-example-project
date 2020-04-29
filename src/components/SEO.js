import React from 'react'
import PropTypes from 'prop-types'
import {Helmet} from 'react-helmet'
import {graphql, useStaticQuery} from 'gatsby'

const getData = graphql`
    query{
        site{
            siteMetadata{
                siteTitle:title
                siteDesc:description
                author
                title
                siteUrl
                image
                twitterUsername
            }
        }
    }
`

const SEO = (props) => {
    const {site} = useStaticQuery(getData);
    const {siteDesc, siteTitle, siteUrl, image, twitterUsername} = site.siteMetadata;

    return (
        <Helmet
        title={`${props.title} | ${siteTitle}`}
        htmlAttributes={{lang:'en'}}
        >
            <meta name='description' content={props.description||siteDesc}/>
            <meta name='image' content={image}/>
            {/* Facebook Card */}
            <meta property='og:url' content={siteUrl}/>
            <meta property='og:type' content='website'/>
            <meta property='og:title' content={siteTitle}/>
            <meta property='og:description' content={siteDesc}/>
            <meta property='og:image' content={`${siteUrl}${image}`}/>
            <meta property='og:image:width' content='400'/>
            <meta property='og:image:width' content='300'/>
            {/* Twitter Card */}
            <meta name='twitter:card' content='summary_large_image'/>
            <meta name='twitter:creator' content={twitterUsername}/>
            <meta name='twitter:title' content={siteTitle}/>
            <meta name='twitter:description' content={siteDesc}/>
            <meta name='twitter:image' content={`${siteUrl}${image}`}/>
        </Helmet>
    )
}

export default SEO

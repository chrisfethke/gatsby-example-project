import React from 'react'
import PropTypes from 'prop-types'
import {useStaticQuery, graphql} from 'gatsby'

const getSiteData = graphql`
    query FirstQuery{
        site{
            siteMetadata{
                title
                description
                author
            }
        }
    }
    `

const HeaderExample = (props) => {
    const data = useStaticQuery(getSiteData)
    return (
        <div>
            <h1>Title:{data.site.siteMetadata.title}</h1>
            <h1>Author:{data.site.siteMetadata.author}</h1>
        </div>
    )
}

export default HeaderExample

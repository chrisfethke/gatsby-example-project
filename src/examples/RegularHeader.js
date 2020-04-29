import React from 'react'
import PropTypes from 'prop-types'
import {StaticQuery, graphql} from 'gatsby'

const getSiteData = graphql`
    query {
        site{
            siteMetadata{
                title
                description
                author
            }
        }
    }
    `

const RegularHeader = (props) => {
    return (
        <StaticQuery
        query={getSiteData}
        render={(data) => {
            return(
                <div>
                    <h2>Title 2: {data.site.siteMetadata.title} </h2>
                    <h4>Author 2: {data.site.siteMetadata.author} </h4>
                </div>
            )
        }}/>
    )
}

export default RegularHeader

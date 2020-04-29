import React from 'react'
import ToursList from './ToursList'
import {useStaticQuery, graphql} from 'gatsby'

const getTours = graphql`
    query{
      tours:allContentfulTour{
        edges{
          node{
            name
            price
            slug
            days
            country
          	contentful_id
            images{
              fluid{
                ...GatsbyContentfulFluid_tracedSVG
              }
            }
          }
        }
      }
    }
`

const Tours = (props) => {
    const tours = useStaticQuery(getTours);
    return (
        <ToursList tours={tours}/>
    )
}

export default Tours

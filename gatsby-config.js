/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

 require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata:{
      title: "BackRoads",
      description: "Check out awesome adventure tours!",
      author: "@cfek",
      twitterUsername: "@fakename",
      image: '/defaultBcg.jpeg',
      siteUrl: 'https://gatsby-test-site-cf.netlify.app'
  },
  plugins: [
      {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://gatsby-test-site-cf.netlify.app',
        sitemap: 'https://gatsby-test-site-cf.netlify.app/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
      `gatsby-plugin-styled-components`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      `gatsby-plugin-transition-link`,
      `gatsby-plugin-playground`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-sitemap`
  ],
}

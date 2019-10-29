/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title:'My test data',
    author:'Zhuo'
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
          spaceId: `uwplz9i380ey`,
          accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      }
    },
    // `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve:`gatsby-transformer-remark`,
        options: {
          plugin:[
            `gatsby-remark-relative-images`,
            {
              resolve: `gatsby-remark-images`,
              options:{
                  maxWidth: 750,
                  linkImagesToOriginal: false
              }
            }
          ]
        }
    }
    
  ]
}

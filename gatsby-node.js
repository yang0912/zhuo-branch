const path = require('path')

  module.exports.createPages = async({ graphql, actions }) => {
      const { createPage} = actions
      const newsTemplate = path.resolve('./src/templates/news.js')
      const res = await graphql(`
        query {
            allContentfulNewsPost {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
      `)

      res.data.allContentfulNewsPost.edges.forEach((edge)=>{
          createPage({
              component: newsTemplate,
              path:`/page1/${edge.node.slug}`,
              context: {
                  slug: edge.node.slug
              }
          })
      })
  } 
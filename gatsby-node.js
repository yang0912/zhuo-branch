const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions

    if(node.internal.type === 'MarkdownRemark'){
        const slug = path.basename(node.fileAbsolutePath, '.md')

        console.log('**********', slug)

        createNodeField({
            node,
            name:'slug',
            value: slug
        })
    }
  }

  module.exports.createPages = async({ graphql, actions }) => {
      const { createPage} = actions
      const newsTemplate = path.resolve('./src/templates/news.js')
      const res = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
      `)

      res.data.allMarkdownRemark.edges.forEach((edge)=>{
          createPage({
              component: newsTemplate,
              path:`/page1/${edge.node.fields.slug}`,
              context: {
                  slug:edge.node.fields.slug
              }
          })
      })
  } 
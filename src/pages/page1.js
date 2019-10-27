import React from 'react';
import Layout from '../components/layout';

import { graphql, useStaticQuery} from 'gatsby';


const Page1 = () =>{
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark{
          edges{
            node{
             frontmatter{
                title
                date
            }
           }
          }
        }
      }                                             
    `)
    console.log(data)
    return(
        <Layout>
            <h1>Page1</h1>
            <ol>
                {data.allMarkdownRemark.edges.map((edge)=>{
                    return(
                        <li>
                            <h2>{edge.node.frontmatter.title}</h2>
                            <p>{edge.node.frontmatter.date}</p>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default Page1
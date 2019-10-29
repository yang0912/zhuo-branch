import React from 'react';
import Layout from '../components/layout';

import { Link, graphql, useStaticQuery} from 'gatsby';


const Page1 = () =>{
    const data = useStaticQuery(graphql`
    query{
        allContentfulNewsPost(
          sort:{
            fields: publishedDate,
            order:DESC
          }
        ){
          edges{
            node{
              title
              slug
              publishedDate(formatString:"MMMM Do, YYYY")
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
                {data.allContentfulNewsPost.edges.map((edge)=>{
                    return(
                        <li>
                            <Link to={`/page1/${edge.node.slug}`}>
                                <h2>{edge.node.title}</h2>
                                <p>{edge.node.publishedDate}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default Page1
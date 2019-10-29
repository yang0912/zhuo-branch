import React from 'react'
import Layout from '../components/layout'

import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { node } from 'prop-types';

export const query = graphql`
    query($slug: String!){
        contentfulNewsPost(slug: {eq: $slug}){
            title
            publishedDate(formatString: "MMMM Do, YYYY")
            body {
                json
            }
        }
    }
`

const Template = props => {
    const options = {
        renderNode: {
            "embeddedAssetBlock": (node)=> {
                const alt = node.data.target.fields.title['en-US']
                const url = node.data.target.fields.file['en-US'].url
                return <img alt={alt} src={url} />
            }
        }
    }
    return (
        <Layout>
            <h1>{props.data.contentfulNewsPost.title}</h1>
            <p>{props.data.contentfulNewsPost.publishedDate}</p>
            {documentToReactComponents(props.data.contentfulNewsPost.body.json, options)}
        </Layout>
    )
}

export default Template
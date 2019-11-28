import React from "react"
import Layout from "../components/global-layout"
import { graphql, Link } from "gatsby"

export default ({data}) => {
    
    return (
    <Layout>
        <div>
            <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
            {data.allMarkdownRemark.edges.map(({node}) => (
                <div key={node.id}>
                    <Link to={node.fields.slug}>
                    <h3>
                        {node.frontmatter.title}{" "} 
                        <span>- {node.frontmatter.date}</span>
                    </h3>
                    <p>{node.excerpt}</p>
                    </Link>
                </div>
            ))}
        </div>
    </Layout>
    )
}
export const query = graphql`
    query {
        allMarkdownRemark {
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "DD MMMM, YYYY")
                    }
                    fields{
                        slug
                    }
                    excerpt
                }
            }
        }
    }
`
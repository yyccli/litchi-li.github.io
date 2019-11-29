import React from "react"
import Layout from "../components/global-layout"
import ArchiveStyle from "../styles/archive.module.css"
import { graphql, Link } from "gatsby"

export default ({data}) => {
    
    return (
    <Layout>
        <div>
            <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
            {data.allMarkdownRemark.edges.map(({node}) => (
                <div key={node.id}>
                    <Link className={ArchiveStyle.archive_link} to={node.fields.slug}>
                    <h3>
                        {node.frontmatter.title}{" "} 
                        <span className={ArchiveStyle.archive_span}>- {node.frontmatter.date}</span>
                    </h3>
                    </Link>
                    <p>{node.excerpt}</p>
                    
                </div>
            ))}
        </div>
    </Layout>
    )
}
export const query = graphql`
    query {
        allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
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
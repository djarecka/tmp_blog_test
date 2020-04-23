import React from "react"
import Layout from "../components/layout"


class AboutPage extends React.Component {
  render() {
    const { data } = this.props
    // const siteTitle = data.site.siteMetadata.title
    //const posts = data.allMdx.edges

    return (
  <Layout location={this.props.location}>
    <h2>About Us</h2>
    <p>TBD</p>
  </Layout>
    )
  }
}
export default AboutPage

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
//   `
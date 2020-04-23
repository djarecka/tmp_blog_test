import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
//import { login, isAuthenticated, getProfile } from "../utils/auth"
import { Router } from "@reach/router"

// nie wiem czy cos musi byc w tych <p>
// const HomeAccount = ({ user }) => {
//   return <p>Hi, {user.name ? user.name : "friend"}!</p>
// }
const HomeAccount = () => <p></p>//({user}) => <p>{user.name ? user.name : "unknown"}</p>
//const Diary = () => <p></p>

class Account extends React.Component {
  render() {
    const { data } = this.props
  // if (!isAuthenticated()) {
  //   login()
  //   return <p>Redirecting to login...</p>
  // }

  // const user = getProfile()

  return (
  <>
   <Router>
    <HomeAccount path="/account"/>
  </Router>

  <Layout location={this.props.location}>
    <p>This is going to be a protected route.</p>
  </Layout>
   </>
)
  }
}
  

export default Account
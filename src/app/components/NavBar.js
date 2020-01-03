import React from "react"
import { Link, navigate } from "gatsby"

import { useIdentityContext } from "react-netlify-identity-widget"

export default () => {
  const { user, isLoggedIn, logoutUser } = useIdentityContext()
  let message = isLoggedIn
    ? `Hello, ${user.user_metadata && user.user_metadata.full_name}`
    : "You are not logged in"

  return (
    <div
      style={{
        display: "flex",
        flex: "1",
        justifyContent: "space-between",
        borderBottom: "1px solid #d1c1e0",
        backgroundColor: "aliceblue",
      }}
    >
      <span>{message}</span>

      <nav>
        <span>Navigate the app: </span>
        <Link to="/app/">Main</Link>
        {` `}
        <Link to="/app/profile">Profile</Link>
        {` `}
        {isLoggedIn ? (
          <a
            href="/"
            onClick={async event => {
              event.preventDefault()
              await logoutUser()
              navigate(`/app/login`)
            }}
          >
            Logout
          </a>
        ) : (
          <Link to="/app/login">Login</Link>
        )}
      </nav>
    </div>
  )
}

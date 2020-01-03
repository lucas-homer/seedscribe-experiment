import React from "react"

import { useIdentityContext } from "react-netlify-identity-widget"
const Profile = () => {
  const { user } = useIdentityContext()
  return (
    <>
      <h1>Your profile</h1>
      <ul>
        <li>Name: {user.user_metadata && user.user_metadata.full_name}</li>
        <li>E-mail: {user.email}</li>
      </ul>
    </>
  )
}

export default Profile

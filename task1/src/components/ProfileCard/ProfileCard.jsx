import React from 'react'
import './ProfileCard.css'

const ProfileCard = (props) => {
  return (
    <div className='main-div'>
      <img src={props.image} alt="profile" width={140} />
        <h2>{props.name}</h2>
        <p>Role: {props.role}</p>
        <p>Location: {props.city}</p>
    </div>
  )
}

export default ProfileCard
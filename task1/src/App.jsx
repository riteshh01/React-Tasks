import React from 'react'
import ProfileCard from './components/ProfileCard/ProfileCard'
import { assets } from './assets/assets'

const App = () => {
  return (
    <>
    <ProfileCard image={assets.ktm1} name="Ritesh" role="Software Developer" city="Gorakhpur" />
    <ProfileCard image={assets.ktm2} name="Vishesh" role="Metro Engineer" city="Lucknow" />
    <ProfileCard image={assets.ktm3} name="Aalekh" role="Java Developer" city="Lucknow" />
    </>
  )
}

export default App
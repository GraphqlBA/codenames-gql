import React from 'react'
import {
  Link
} from 'react-router-dom'

function Home () {
  return <ul>
    <li><Link to='/leader'>Leader</Link></li>
    <li><Link to='/players'>Players</Link></li>
  </ul>
}

export default Home

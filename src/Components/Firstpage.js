import React from 'react'
import './firstpage.css'
import { Link } from 'react-router-dom'


export default function firstpage() {
    
  return (
    <>
    <h1>TODOs</h1>
    <div id="todo1">
        <p>Our App,</p>
        <p>Your LIFE Made Simpler</p>
    </div>
    <Link to="/create">
    <div id="create" >
        Add to your <strong>TODO List</strong>
    </div>
    </Link>
    <Link to="/view">
    <div id="view">
        View your <strong>TODO List</strong>
    </div>
    </Link>
    </>
  )
}

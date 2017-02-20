import React, { PropTypes } from 'react'
import {Link} from 'react-router'

const AboutComponent = React.createClass({
  render () {
    return (
      <div>
        <Link to={'/'}>Home</Link>
        <h1>All about me</h1>
      </div>
    )
  }
})

export default AboutComponent

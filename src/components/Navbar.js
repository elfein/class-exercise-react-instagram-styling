import React, { Component } from 'react'
import { FaInstagram, FaUser, FaHeartO, FaCompass, FaSearch } from 'react-icons/lib/fa'
import styled from 'styled-components'

class Navbar extends Component {
  render () {
    return (
      <div>
        <h3><FaInstagram /> | Instaclone</h3>
        <FaSearch/><input type="text"/>
        <div>
          <FaCompass />
          <FaHeartO />
          <FaUser />
        </div>
      </div>
    )
  }
}

export default Navbar

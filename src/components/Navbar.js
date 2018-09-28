import React, { Component } from 'react'
import { FaInstagram, FaUser, FaHeartO, FaCompass, FaSearch } from 'react-icons/lib/fa'
import styled from 'styled-components'

const StyledDiv = styled.div`
background-color: white;
display: flex;
align-items: center;
padding: 25px 5vw;
height: 25px;
width: 90vw;
border-bottom: 1px solid rgba(0,0,0,.1);
justify-content: space-between;
h3{
  font-family: 'Oleo Script', cursive;
  font-size: 1.75rem;
}
#search{
  background: #fafafa;
  border: 1px solid #dbdbdb;
  padding: 7px;
  border-radius: 3px;
  color: #999;
  display: flex;
  justify-content: space-between;
  svg {
    height: 1em;
  }
}
input{
  border: none;
  font-weight: 300;
  background: none;
  text-align: center;
}
div > svg{
  width:28px;
  height:28px;
}
#nav svg{
  padding: 8px;
}
`

class Navbar extends Component {
  render () {
    return (
      <StyledDiv>
        <h3><FaInstagram /> | Instaclone</h3>
        <div id="search">
        <FaSearch />
        <input type="text" placeholder="Search"/></div>
        <div id="nav">
          <FaCompass />
          <FaHeartO />
          <FaUser />
        </div>
      </StyledDiv>
    )
  }
}

export default Navbar

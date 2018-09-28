import React, { Component } from 'react'
import Post from './Post'
import FakePost from '../seed/fakePost.js'
import styled from 'styled-components';

const StyledDiv = styled.div`
background: rgb(249,249,249);
display: block;
`

class Posts extends Component {

  state = {
    posts: []
  }
  componentWillMount () {
    const posts = []
    for (let i = 0; i < 20; i++) {
      posts.push(new FakePost())
    }
    this.setState({ posts })
  }
  render () {
    return (
      <StyledDiv>
        {this.state.posts.map(post => <Post key={post.id} post={post}/>)}
      </StyledDiv>
    )
  }
}

export default Posts

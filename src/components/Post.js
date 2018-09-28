import React, { Component } from 'react'
import Comment from './Comment'
import { FaHeartO, FaCommentO } from 'react-icons/lib/fa'
import styled from 'styled-components';

const StyledDiv = styled.div`
background: #fff;
font-family: 'Open Sans';
border-radius: 3px;
width: 95vw;
max-width: 600px;
margin: 20px auto;
border: 1px solid #e6e6e6;
#credit {
display: flex;
justify-content: flex-start;
align-items: center;
padding: 16px;
img {
  height: 30px;
  width: 30px;
  border-radius: 100%;
  border-style: none;
}
p {
  padding-left: 5px;
  font-weight: bold;
}
}
#pic img {
  max-width: 600px;
  margin: 0 auto;
}
#description {
  padding: 5px 16px;
  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  svg {
    padding: 5px;
    height: 35px;
    width: 35px;
  }
#comments {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  div {
    display: flex;
    align-items: center;
  }
  img {
    height: 30px;
    width: 30px;
    border-radius: 100%;
  }
  p {
    margin: 1em 1em 1em 5px;
  }
  strong {
    padding-right: 5px;
  }
}
}
`

class Post extends Component {

  render() {
    const { post } = this.props
    return (
      <StyledDiv>
        <div id="credit">
          <img src={post.user.profile_pic} alt={post.user.username} />
          <p>{post.user.username}</p>
        </div>
        <div id="pic">
          <img src={post.image.url} />
        </div>
        <div id="description">
          <p>{post.caption}</p>
          <FaHeartO />
          <FaCommentO />
          <p>{post.likes.length} likes</p>
          <div id="comments">{post.comments.map((comment, i) => <Comment key={i} comment={comment} />)}
          </div></div>
      </StyledDiv>
    )
  }
}

export default Post

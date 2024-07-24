import {useState} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
} from './styledComponents'

const Comments = () => {
  const [name, setUserName] = useState('')
  const [commentText, setCommonText] = useState('')
  const [comment, setCommont] = useState({name: '', commentText: ''})
  const [commontList, setCommentList] = useState([])

  const onChangeUseName = event => setUserName(event.target.value)

  const onChangeCommontText = event => setCommonText(event.target.value)

  const commentDetails = {
    name,
    commentText,
  }

  const onAddComment = event => {
    event.preventDefault()
    setCommont({name, commentText})
    const newComment = {
      id: uuidv4(),
      name,
      commentText,
    }
    setCommentList(previousComment => [...previousComment, newComment])
    setCommonText('')
    setUserName('')
  }

  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={onAddComment}>
        <NameInput
          type="text"
          placeholder="Your name"
          value={name}
          onChange={onChangeUseName}
        />
        <CommentTextInput
          placeholder="Your comment"
          rows="6"
          value={commentText}
          onChange={onChangeCommontText}
        />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>
      <commentsList>
        {commontList.map(eachItem => (
          <CommentItem key={eachItem.id} commentDetails={eachItem} />
        ))}
      </commentsList>
    </CommentsContainer>
  )
}

export default Comments

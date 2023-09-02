// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {data} = props
  const {id, author, title, topic, avatarUrl, imageUrl} = data
  return (
    <Link to={`blogs/${id}`} className="link-styling">
      <li className="each-list">
        <img src={imageUrl} alt={id} className="images" />
        <div>
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="author-container">
            <img src={avatarUrl} alt={id} className="avatar" />
            <p className="author">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem

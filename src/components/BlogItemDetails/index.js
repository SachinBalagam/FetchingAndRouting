// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: {}, isLoading: true}

  componentDidMount() {
    this.getBlogItemDetails()
  }

  getBlogItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const UpdatedData = {
      id: data.id,
      author: data.author,
      title: data.title,
      topic: data.topic,
      content: data.content,
      avatarUrl: data.avatar_url,
      imageUrl: data.image_url,
    }
    this.setState({blogData: UpdatedData, isLoading: false})
  }

  render() {
    const {blogData, isLoading} = this.state
    const {id, author, title, content, avatarUrl, imageUrl} = blogData
    return (
      <div className="blog-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <div>
            <h1 className="titles">{title}</h1>
            <div className="authors-container">
              <img src={avatarUrl} alt={id} className="avatar" />
              <p>{author}</p>
            </div>
            <img src={imageUrl} alt={title} className="image" />
            <p className="content">{content}</p>
          </div>
        )}
      </div>
    )
  }
}

export default BlogItemDetails

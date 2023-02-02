// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {
    blogData: {},
    isLoading: true,
  }

  componentDidMount() {
    this.getBlogDetailedData()
  }

  getBlogDetailedData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
      id: data.id,
      topic: data.topic,
    }

    this.setState({blogData: updatedData, isLoading: false})
  }

  renderBlogItemDetails = () => {
    const {blogData} = this.state
    const {title, imageUrl, avatarUrl, author, content} = blogData

    return (
      <div className="blog-details-container">
        <h2 className="blog-heading">{title}</h2>
        <div className="container">
          <img src={avatarUrl} alt={author} className="profile" />
          <p className="author">{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="img" />
        <p className="content">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.renderBlogItemDetails()
        )}
      </div>
    )
  }
}

export default BlogItemDetails

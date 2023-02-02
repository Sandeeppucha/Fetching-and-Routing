// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogsData} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogsData

  return (
    <Link to={`/blogs/${id}`} className="link-container">
      {' '}
      <div className="blog-data-container">
        <div className="bg-container">
          <div className="data-container">
            <img src={imageUrl} alt={`eachBlog${id}`} className="image" />
            <div className="top-container">
              <p className="topic">{topic}</p>
              <h1 className="title">{title}</h1>
              <div className="bottom-container">
                <img src={avatarUrl} alt={`avatar ${id}`} className="profile" />
                <p className="author">{author}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem

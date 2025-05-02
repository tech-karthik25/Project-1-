import './App.css'
import {useState} from 'react'
import Userprofile from './components/userprofile'

const InitalcommentsList = [
  {
    uniqueID: 1,
    imageUrl:
      'data:image/jpeg;base64,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',
    name: 'Taj Mahal',
    state: 'Uttar Pradesh',
  },
  {
    uniqueID: 2,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLNte86V5rclihCrTskP2AIn02m2DD7fpiBQ&s',
    name: 'Charminar',
    state: 'Telangana',
  },
  {
    uniqueID: 3,
    imageUrl:
      'https://thumbs.dreamstime.com/b/photo-golden-shikar-gopuram-tirupati-balji-tirumala-andhra-pradesh-india-photo-golden-shikar-gopuram-tirupati-balji-196343822.jpg',
    name: 'Tirupati',
    state: 'Andhra Pradesh',
  },
  {
    uniqueID: 4,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7sj7gxtjOlyvTtNiehcQOH5U0Mt__7wEuYQ&s',
    name: 'Mysore Palace',
    state: 'Karnataka',
  },
]

function App() {
  const [name, setname] = useState('')
  const [comment, setcomment] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [searchInput, setInput] = useState('')
  const [commentsList, setCommentList] = useState(InitalcommentsList)

  const onChange = event => setInput(event.target.value)
  const changeName = event => setname(event.target.value)
  const onChangecomment = event => setcomment(event.target.value)
  const changeImageUrl = event => setImageUrl(event.target.value)

  function deleteComment(uniqueID) {
    const updatedList = commentsList.filter(item => item.uniqueID !== uniqueID)
    setCommentList(updatedList)
  }

  const onAddcomment = event => {
    event.preventDefault()
    const newcomment = {
      uniqueID: commentsList.length + 1,
      name: name,
      State: comment,
      imageUrl: imageUrl,
    }
    setCommentList(prev => [...prev, newcomment])
    setname('')
    setcomment('')
    setImageUrl('')
  }

  const searchresults = commentsList.filter(item =>
    item.name.toLowerCase().includes(searchInput.toLowerCase()),
  )

  return (
    <div className="container">
      <div>
        <header>Top Tourisim Places in India</header>
      </div>
      <div className="main">
        <div className="list-items">
          <input
            className="one"
            placeholder="Name"
            value={name}
            onChange={changeName}
          />
          <input
            className="two"
            placeholder="State"
            value={comment}
            onChange={onChangecomment}
          />
          <input
            className="image-url"
            placeholder="Image URL"
            value={imageUrl}
            onChange={changeImageUrl}
          />
          <button type="button" onClick={onAddcomment} className="addComment">
            Add Comment
          </button>
        </div>

        <div className="card-holder">
          <div>
            <input
              type="search"
              placeholder="Search"
              onChange={onChange}
              value={searchInput}
            />
            <ol className="unorderedlist">
              {searchresults.map(eachitem => (
                <Userprofile
                  userdetails={eachitem}
                  key={eachitem.uniqueID}
                  deleteComment={deleteComment}
                />
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

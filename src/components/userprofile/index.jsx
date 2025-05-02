import './index.css'

const Userprofile = props => {
  const {userdetails, deleteComment} = props
  const {imageUrl, name, state, uniqueID} = userdetails

  const deleteChange = () => {
    deleteComment(uniqueID)
  }

  return (
    <li key={uniqueID}>
      <div className="card">
        <img src={imageUrl} className="image" alt={name} />
        <div className="card1">
          <h1 className="text">{name}</h1>
          <p className="text">{state}</p>
          <button
            onClick={deleteChange}
            className="delete-button"
            type="button"
          >
            ❌
          </button>
        </div>
      </div>
    </li>
  )
}

export default Userprofile

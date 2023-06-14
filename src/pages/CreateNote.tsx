import {Link, useNavigate} from "react-router-dom"
import {IoIosArrowBack} from "react-icons/io"
import { useState } from "react"

const CreateNote = ({setNotes}: any) => {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  function createNotes() {
    if (title && text) {
      setNotes(prevNote => [{
        id: Math.floor(Math.random() * 10000),
        title: title,
        text: text
      }, ...prevNote])

      navigate("/")
    }
  }

  return (
    <section>
      <header className="create-note__header">
        <Link to="/" className="btn"><IoIosArrowBack /></Link>
        <button className="btn lg primary" onClick={createNotes}>Save</button>
      </header>
      <form className="create-note__form">
        <input type="text" placeholder="Title" value={title} autoFocus onChange={(e) => setTitle(e.target.value)}/>
        <textarea rows={10}  value={text} onChange={(e) => setText(e.target.value)} placeholder="Node details..."></textarea>
      </form>
    </section>
  )
}

export default CreateNote
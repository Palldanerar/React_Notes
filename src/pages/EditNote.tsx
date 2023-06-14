import {Link, useParams} from "react-router-dom"
import {IoIosArrowBack} from "react-icons/io"
import {RiDeleteBin6Line} from "react-icons/ri"
import { INote } from '../interface/INote'

const EditNote = ({notes, setNotes} : any) => {

  const {id} = useParams()
  const note = notes.find((item : any) => item.id == id)
  console.log(note)

  return (
    <section>
      <header className="create-note__header">
        <Link to="/" className="btn"><IoIosArrowBack /></Link>
        <button className="btn lg primary">Save</button>
        <button className="btn danger"><RiDeleteBin6Line /></button>
      </header>
      <form className="create-note__form">
        <input type="text" placeholder="Title" value={note.title} autoFocus/>
        <textarea rows={10} value={note.text} placeholder="Node details..."></textarea>
      </form>
    </section>
  )
}

export default EditNote
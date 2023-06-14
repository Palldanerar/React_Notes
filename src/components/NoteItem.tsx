import {Link} from "react-router-dom"

interface NoteItemProps {
    id: number,
    title: string,
    text: string
}

const NoteItem = ({id, title, text} : NoteItemProps ) => {
  return (
    <div>
        <Link to={`/edit/${id}`} className="note" >
            <h4>{title}</h4>
            <p>{text}</p>
        </Link>
    </div>
  )
}

export default NoteItem
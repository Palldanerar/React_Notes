interface NoteItemProps {
    title: string,
    text: string
}

const NoteItem = ({title, text} : NoteItemProps ) => {
  return (
    <div>
        <h1>{title}</h1>
        <h2>{text}</h2>
    </div>
  )
}

export default NoteItem
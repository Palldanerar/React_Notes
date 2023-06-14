import {Routes, Route} from "react-router-dom"
import Notes from "./pages/Notes"
import CreateNote from "./pages/CreateNote"
import EditNote from "./pages/EditNote"
import { useEffect, useState } from "react"

function App() {

  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || [])

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  return (
    <Routes>
      <Route path="/" element={<Notes notes={notes} />}/>
      <Route path="/create" element={<CreateNote setNotes={setNotes} />}/>
      <Route path="/edit/:id" element={<EditNote notes={notes} setNotes={setNotes} />}/>
    </Routes>
  )
}

export default App

import {Routes, Route} from "react-router-dom"
import Notes from "./pages/Notes"
import CreateNote from "./pages/CreateNote"
import EditNote from "./pages/EditNote"
import { useState } from "react"

function App() {

  const [notes, setNotes] = useState([])

  return (
    <Routes>
      <Route path="/" element={<Notes notes={notes} />}/>
      <Route path="/create" element={<CreateNote notes={notes} setNotes={setNotes} />}/>
      <Route path="/edit/:id" element={<EditNote />}/>
    </Routes>
  )
}

export default App

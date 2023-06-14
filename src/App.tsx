import {Routes, Route} from "react-router-dom"
import Notes from "./pages/Notes"
import CreateNote from "./pages/CreateNote"
import EditNote from "./pages/EditNote"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Notes />}/>
      <Route path="/create" element={<CreateNote />}/>
      <Route path="/edit/:id" element={<EditNote />}/>
    </Routes>
  )
}

export default App

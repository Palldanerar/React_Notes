import { Link, useParams, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";

const EditNote = ({ notes, setNotes }: any) => {
  const { id } = useParams();
  const note = notes.find((item: any) => item.id == id);
  const navigate = useNavigate();
  const [newTitle, setNewTitle] = useState("");
  const [newText, setNewText] = useState("");

  function deleteNode() {
    setNotes(notes.filter((item: any) => item.id != id));
    navigate("/");
  }

  function saveNode() {
    setNotes(notes.filter((item: any) => item.id != id));

    if (newTitle && newText) {
      setNotes((prevNote: any) => [
        {
          id: Math.floor(Math.random() * 10000),
          title: newTitle,
          text: newText,
        },
        ...prevNote,
      ]);

      navigate("/");
    }
  }

  return (
    <section>
      <header className="create-note__header">
        <Link
          to="/"
          className="btn"
        >
          <IoIosArrowBack />
        </Link>
        <button
          className="btn lg primary"
          onClick={saveNode}
        >
          Save
        </button>
        <button
          className="btn danger"
          onClick={deleteNode}
        >
          <RiDeleteBin6Line />
        </button>
      </header>
      <form className="create-note__form">
        <input
          type="text"
          placeholder="Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          autoFocus
        />
        <textarea
          rows={10}
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          placeholder="Node details..."
        ></textarea>
      </form>
    </section>
  );
};

export default EditNote;

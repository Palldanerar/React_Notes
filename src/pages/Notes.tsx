import { CiSearch } from "react-icons/ci";
import NoteItem from "../components/NoteItem";
import { Link } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs";
import { INote } from "../interface/INote";

interface NotesProps {
  notes: INote[];
}

const Notes = ({ notes }: NotesProps) => {
  return (
    <section>
      <header className="notes__header">
        <h2>Notes</h2>
        <button className="btn">
          <CiSearch />
        </button>
      </header>
      <div className="notes__container">
        {notes.map((note) => {
          return (
            <NoteItem
              key={note.id}
              id={note.id}
              title={note.title}
              text={note.text}
            />
          );
        })}
      </div>
      <Link
        to="/create"
        className="btn add__btn"
      >
        <BsPlusLg />
      </Link>
    </section>
  );
};

export default Notes;

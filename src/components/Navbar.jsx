import { BsMusicNoteList } from "react-icons/bs";

function Navbar({ setLibraryStatus, libraryStatus }) {
  return (
    <nav>
      <h1>Jam with React</h1>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        <BsMusicNoteList />
        Library
      </button>
    </nav>
  );
}

export default Navbar;

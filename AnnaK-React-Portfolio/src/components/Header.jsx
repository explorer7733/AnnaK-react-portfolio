import Navbar from "./Navbar";

function Header({setCurrentPage}) {
  return (
    <header className="header">
      <h2>PORTFOLIO</h2>
        <Navbar setCurrentPage={setCurrentPage}/>
    </header>
  )
}

export default Header;
import Navbar from "./Navbar";

function Header({setCurrentPage}) {
  return (
    <header className="header">
      <h2>Anna<span className="k">K</span> <span className="waveportfolio">PORTFOLIO</span></h2>
        <Navbar setCurrentPage={setCurrentPage}/>
    </header>
  )
}

export default Header;
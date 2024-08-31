function Navbar({setCurrentPage}) {
    return (
        <nav>
            <ul>
                <li className="nav-link" onClick={() => {
                    setCurrentPage("About me")
                }}><a href="#">About me</a></li>
                <li className="nav-link" onClick={() => {
                    setCurrentPage("Portfolio")
                }}><a href="#">Projects</a></li>
                <li className="nav-link" onClick={() => {
                    setCurrentPage("Contact")
                }}><a href="#">Contact</a></li>
                <li className="nav-link" onClick={() => {
                    setCurrentPage("Resume")
                }}><a href="#">Resume</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
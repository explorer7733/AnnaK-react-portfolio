function Navbar({setCurrentPage}) {
    return (
        <nav>
            <ul>
                <li onClick={() => {
                    setCurrentPage("About me")
                }}><a href="#">About me</a></li>
                <li onClick={() => {
                    setCurrentPage("Portfolio")
                }}><a href="#">Portfolio</a></li>
                <li onClick={() => {
                    setCurrentPage("Contact")
                }}><a href="#">Contact</a></li>
                <li onClick={() => {
                    setCurrentPage("Resume")
                }}><a href="#">Resume</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
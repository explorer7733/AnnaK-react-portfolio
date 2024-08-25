function Resume() {
    return (
        <div>
            <h1>Resume</h1>
            <p>Here is my resume</p>
            <div className="frontEndSkills">
                <h2>Front-end Skills</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>
            </div>
            <div className="backEndSkills">
                <h3>Back-end Skills</h3>
                <ul>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                </ul>
            </div>
        </div>
    );
}
export default Resume;
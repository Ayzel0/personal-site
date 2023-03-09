import '../styles/Intro.css'

function Intro() {
    return (
        <div className="intro">
            <div className = "intro-container">
                <h3>Hi, my name is</h3>
                <div className="typewriter">
                    <h1>Andrew Lee.</h1>
                </div>
                <h4>I'm studying <span className="alternate-color">Computer Science, International Relations, and Cybersecurity</span> at Georgetown University.</h4>
                <button>Scroll for More</button>
            </div>
        </div>
    )
}

export default Intro;
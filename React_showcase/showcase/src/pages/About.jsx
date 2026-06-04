import '../style/page.css'

function About(){
    return(
        <div className="page">
            <h1>About router</h1>
            <div className="info">
                <p>React has only one page ,but router allows us to create multiple views within a single page.</p>
            </div>
            <div className="info">
                <p>React Router is a library that helps you handle routing in a React application, allowing you to create single-page applications with navigation without refreshing the page.</p>
                </div>
                <div className="info">
                    <h3>4 Main components</h3>
                    <ul>
                        <li><strong>BrowserRouter</strong></li>
                        <li><strong>Route</strong></li>
                        <li><strong>Switch</strong></li>
                        <li><strong>Link</strong></li>
                    </ul>
                </div>
            </div>
        // </div>
    )
}
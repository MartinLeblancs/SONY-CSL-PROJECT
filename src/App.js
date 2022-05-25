import React, {Component} from "react"

class App extends Component {
  render() {
    return (
      <div className="App" style={{
        backgroundImage: "url(/background.jpg)",
        width: '100vw',
        height: '100vh',
        // margin: 0,
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover'
      }}>
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload (test).
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        {/* <body>
        </body> */}
      </div>
    )
  }
}

export default App;

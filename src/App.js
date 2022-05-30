import React, {Component} from "react"
import HeaderWeb from "./components/HeaderWeb"
import LanguageButton from "./components/LanguageButton"
import MusicList from "./components/MusicList"
import MusicApi from "./components/MusicApi"
import ShareButton from "./components/ShareButton"

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
      <div style={{
        flex: 1
      }}>
      </div>
      <div style={{
        flex: 2
      }}>
          <p>test</p>

      </div>
        {/* <header className="App-header">
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
        </header> */}
        {/* <body>
        </body> */}
      </div>
    )
  }
}

export default App;

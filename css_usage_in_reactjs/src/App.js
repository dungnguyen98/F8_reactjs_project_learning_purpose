import "./App.css"
import Heading from './components/Heading'
import Paragraph from './components/Paragraph'
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <div style={{ padding: '0 32px' }}>
      <GlobalStyle>
        <Heading/>
        <Paragraph/>
        <div className="d-flex">
          <div>Item 1</div>
          <div>Item 2</div>
        </div>
      </GlobalStyle>
    </div>
  );
}

export default App;

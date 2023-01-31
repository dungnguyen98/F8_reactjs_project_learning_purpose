import Button from "./components/Button";
import GlobalStyle from "./components/GlobalStyle"

function App() {
  return (
    <div className="App">
      <GlobalStyle>
        <div style={{ padding: '10px 32px '}}>
            <Button />
        </div>
      </GlobalStyle>
    </div>
  );
}

export default App;

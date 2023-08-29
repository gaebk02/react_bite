import "./App.css";
import Header from "./component/header";
import Body from "./component/body";
import Footer from "./component/footer";

// 부모 컴포넌트
function App() {
  const BodyProps = {
    name: "DEVELOPER TAEKYUN",
    location: "TOKYO",
    // hobby: ["READING", "WALKING", "DEVELOPING"],
  };
  return (
    <div className="App">
      <Header />
      <Body {...BodyProps}></Body>
      <Footer />
    </div>
  );
}

export default App;

import styled from "@emotion/styled";
import "./App.css";
import { Header } from "./components/Header";
import { Oulu } from "./View/Oulu";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Helsinki } from "./View/Helsinki";

function App() {
  return (
    <Router>
      <PageBackground>
        <AppDiv>
          <Header />
          <Routes>
            <Route path="/Oulu" element={<Oulu />} />
            <Route path="/Helsinki" element={<Helsinki />} />
            <Route path="/" element={<Oulu />} />
            <Route path="/*" element={<Oulu />} />
          </Routes>
        </AppDiv>
      </PageBackground>
    </Router>
  );
}

const AppDiv = styled.div`
  height: 100vh;
  margin: 0rem 20rem;
`;

const PageBackground = styled.div`
  background: rgb(0, 4, 27);
`;

export default App;

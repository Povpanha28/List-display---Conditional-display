import pnLogo from "./assets/pn-logo.png";
import Header from "./components/Header";
import Score from "./components/Score";
import { JAVA_RESULTS, HTML_RESULTS, PYTHON_RESULTS, ENGLISH_RESULTS } from "./data"

function App() {
  return (
    <>
      <Header batchname="React" />
      <main className="scores-container">
        <Score courseName="Java" courseResults={JAVA_RESULTS} />
        <Score courseName="Python" courseResults={PYTHON_RESULTS} />
        <Score courseName="HTML" courseResults={HTML_RESULTS} />
        <Score courseName="English" courseResults={ENGLISH_RESULTS} />
      </main>
    </>
  );
}

export default App;

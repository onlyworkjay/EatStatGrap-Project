import "./App.css";
import ReviewListPage from "./pages/review/ReviewListPage";
import {Routes} from "react-router-dom";

function App() {
  return (
    <div className="wrap">
      <Header />
      <div className="main">
        <Routes>
          <Route path="/review" element={<ReviewListPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

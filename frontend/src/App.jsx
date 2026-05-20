import {Route, Routes} from "react-router-dom";
import "./App.css";
import ReviewListPage from "./pages/review/ReviewListPage";


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

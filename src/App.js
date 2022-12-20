import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CreateSpaceModal from "./Components/Modal/CreateSpaceModal/CreateSpaceModal";
import LandingPage from "./pages/landingPage";
import CommentSection from "./Components/comments/comments";
import Question from './Components/Modal/AskAQuestionModal/AskQuestionModal'
import TmpButton from "./Components/Modal/AskAQuestionModal/tmpButton";
import HomePage from "./pages/homepage";
import Decadev from "./Components/Register_Login/SignUp/DecadevSignUp";
import DecadevSignIn from "./Components/Register_Login/Login/DecadevLogin";
import About from "./Components/Modal/Article/write-article";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/space" element={<CreateSpaceModal />} />
        {/* <Route path="/question" element={<TmpButton />} /> */}
        <Route path="/question" element={<Question />} />
        <Route path="/comments" element={<CommentSection />} />
        <Route path="/stories" element={<HomePage />} />
        <Route path="/signup" element={<Decadev />} />
        <Route path="/login" element={<DecadevSignIn />} />
        <Route path="/article" element={<About/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

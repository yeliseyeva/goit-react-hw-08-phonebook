import ContactsList from "./Components/ContactsList/ContactsList";
import ContactForm from "./Components/ContactForm/ContactForm";
import Container from "./Components/Container/Container";
import Filter from "./Components/Filter/Filter";
import {Routes, Route} from 'react-router-dom';
import HomePage from "./views/HomePage";
import PhonebookPage from "./views/PhonebookPage";
import NavBar from "./Components/NavBar";
import LoginPage from "./views/LoginPage";
import RegisterPage from "./views/RegisterPage";
import AppBar from "./Components/AppBar";

function App() {
  return (
    <>

    <AppBar />

    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/contacts" element={<PhonebookPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
    </Routes>
  
    </>
  );
}

export default App;

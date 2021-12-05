// import ContactsList from "./Components/ContactsList/ContactsList";
// import ContactForm from "./Components/ContactForm/ContactForm";
// import Container from "./Components/Container/Container";
// import Filter from "./Components/Filter/Filter";
import { Routes, Route } from "react-router-dom";
// import HomePage from "./views/HomePage";
// import PhonebookPage from "./views/PhonebookPage";
// import NavBar from "./Components/NavBar";
// import LoginPage from "./views/LoginPage";
// import RegisterPage from "./views/RegisterPage";
import AppBar from "./Components/AppBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, Suspense, lazy } from "react";
import authOperations from "./redux/auth/auth-operations";
import PublicRoute from "./Components/PublicRoute";
import PrivateRoute from "./Components/PrivateRoute";
import { getIsFetchingCurrent } from "./redux/auth/auth-selectors";

const HomePage = lazy(() =>
  import("./views/HomePage" /*webpackChunkName: "home-page" */)
);
const RegisterPage = lazy(() =>
  import("./views/RegisterPage" /*webpackChunkName: "register-page" */)
);
const LoginPage = lazy(() =>
  import("./views/LoginPage" /*webpackChunkName: "login-page" */)
);
const PhonebookPage = lazy(() =>
  import("./views/PhonebookPage" /*webpackChunkName: "phonebook-page" */)
);

function App() {
  const dispatch = useDispatch();

  const isFetchingCurrentUser = useSelector(getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  

  return (
    !isFetchingCurrentUser && (
      <>
        <AppBar />

        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route path="/" element={<PublicRoute />}>
              <Route path="/" element={<HomePage />} />
            </Route>


            <Route
              path="/contacts"
              element={<PrivateRoute redirectTo="/login" />}
            >
              <Route path="/contacts" element={<PhonebookPage />} />
            </Route>

            



            <Route
              path="/register"
              element={<PublicRoute redirectTo="/contacts" restricted />}
            >
              <Route path="/register" element={<RegisterPage />} />
            </Route>

            

            <Route
              path="/login"
              element={<PublicRoute redirectTo="/contacts" restricted />}
            >
              <Route path="/login" element={<LoginPage />} />
            </Route>
          </Routes>
        </Suspense>
      </>
    )
  );
}

export default App;



<Route
              path="/phonebook"
              element={<PrivateRoute redirectTo="/login" />}
            >
              <Route path="/phonebook" element={<PhonebookPage />} />
            </Route>
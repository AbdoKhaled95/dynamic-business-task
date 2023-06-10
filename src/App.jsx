import { CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import { useMainThemeContext } from "./context/MainThemeContext";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import Contacts from "./pages/Contacts/Contacts";
import Notfound from "./pages/NotFound/NotFound";
import Login from "./pages/Login/Login";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import AddContact from "./pages/Contacts/AddContact";
import UpdateContact from "./pages/Contacts/UpdateContact";
import ContactDetatils from "./pages/Contacts/ContactDetatils";
const App = () => {
  const { theme } = useMainThemeContext();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Routes>
        <Route
          path={"/"}
          element={
            <ProtectedRoute>
              <Contacts />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path={"/contacts"}
          element={
            <ProtectedRoute>
              <Contacts />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path={`/contacts/:id`}
          element={
            <ProtectedRoute>
              <ContactDetatils />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path={"/contacts/create"}
          element={
            <ProtectedRoute>
              <AddContact />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path={`/contacts/update/:id`}
          element={
            <ProtectedRoute>
              <UpdateContact />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
      <ToastContainer
        pauseOnHover={false}
        pauseOnFocusLoss={false}
        draggable={false}
      />
    </ThemeProvider>
  );
};

export default App;

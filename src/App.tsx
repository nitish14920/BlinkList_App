import React, { useEffect, useState } from "react";

import "./App.css";

import BookDetailsPage from "./components/pages/bookDetailsPage/BookDetailsPage";
import { Route, Routes } from "react-router-dom";
import ContinueReadingPage from "./components/pages/continueReadingPage/ContinueReadingPage";
import axios from "axios";
import EntrepreneurshipBooksPage from "./components/pages/EntrepreneurshipBooksPage/EntrepreneurshipBooksPage";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const [finishedReading, setFinishedReading] = useState([]);
  const [continueReading, setContinueReading] = useState([]);
  const [books, setBooks] = useState([]);
  const [explore, setExplore] = useState(false);
  const { isAuthenticated } = useAuth0();

  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get(
          "http://localhost:8000/continueReading"
        );
        console.log(response.data);
        setContinueReading(response.data);
      } catch (error) {
        console.error(error);
      }
      try {
        const response = await axios.get(
          "http://localhost:8000/finishedReading"
        );
        console.log(response.data);
        setFinishedReading(response.data);
      } catch (error) {
        console.error(error);
      }
      try {
        const response = await axios.get("http://localhost:8000/books");
        console.log(response.data);
        setBooks(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getUser();
  }, []);
  return (
    <div className="App">
      {/* <ContinueReadingPage /> */}

      <Routes>
        <Route
          path="/"
          element={
            <ContinueReadingPage
              continueReading={continueReading}
              finishedReading={finishedReading}
              explore={explore}
              setExplore={setExplore}
              isAuthenticated={isAuthenticated}
            />
          }
        ></Route>
        <Route
          path="/entrepreneurshipBooks"
          element={
            <EntrepreneurshipBooksPage
              books={books}
              explore={explore}
              setExplore={setExplore}
              isAuthenticated={isAuthenticated}
            ></EntrepreneurshipBooksPage>
          }
        ></Route>
        <Route
          path="/bookDetails/:id"
          element={
            <BookDetailsPage
              finishedBooks={finishedReading}
              continueBooks={continueReading}
              setContinueReading={setContinueReading}
              setFinishedReading={setFinishedReading}
              explore={explore}
              setExplore={setExplore}
              isAuthenticated={isAuthenticated}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;

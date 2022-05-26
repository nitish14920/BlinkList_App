import React, { useEffect, useState } from "react";

import "./App.css";
import BookDetails from "./components/molecules/bookDetails/BookDetails";

import Footer from "./components/molecules/footer/Footer";
import BookDetailsPage from "./components/pages/bookDetailsPage/BookDetailsPage";
import { Route, Routes } from "react-router-dom";
import ContinueReadingPage from "./components/pages/continueReadingPage/ContinueReadingPage";
import ExploreBooksOnEntrepreneurship from "./components/molecules/exploreBookOnEntrepreneurship/ExploreBooksOnEntrepreneurship";
import SearchBar from "./components/molecules/searchBar/SearchBar";
import axios from "axios";
import EntrepreneurshipBooksPage from "./components/pages/EntrepreneurshipBooksPage/EntrepreneurshipBooksPage";

function App() {
  const [finishedReading, setFinishedReading] = useState([]);
  const [continueReading, setContinueReading] = useState([]);
  const [books, setBooks] = useState([]);
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
            />
          }
        ></Route>
        <Route
          path="/entrepreneurshipBooks"
          element={
            <EntrepreneurshipBooksPage
              books={books}
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
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;

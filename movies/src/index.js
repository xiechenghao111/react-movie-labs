import React from "react";

import ReactDOM from "react-dom";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import UpcomingPage from "./pages/upcomingPage";
import TopratedPage from "./pages/topratedPage"
import PeoplePage from "./pages/peoplePage"
import MovieReviewPage from "./pages/movieReviewPage";
import PeopleDetailPage from "./pages/peopleDetailPage";
import SiteHeader from './components/siteHeader'
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import TVPage from "./pages/TVPage";
import TVDetailPage from "./pages/TVDetailPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <SiteHeader />
    <MoviesContextProvider>
    <Routes>
    <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
      <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
      <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
      <Route path="/movies/upcoming" element={<UpcomingPage />} />
      <Route path="/movies/toprated" element= {<TopratedPage/>}/>
      <Route path="/movies/people" element= {<PeoplePage/>}/>
      <Route path="/movies/tv" element= {<TVPage/>}/>
      <Route path="/people/:id" element= {<PeopleDetailPage/>}/>
      <Route path="/TV/:id" element= {<TVDetailPage/>}/>
      <Route path="/movies/:id" element={<MoviePage />} />
      <Route path="/:page" element={<HomePage />} />
      <Route path="*" element={ <Navigate to="/1" /> } />

    </Routes>
    </MoviesContextProvider>
  </BrowserRouter>
  <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import ActorPage from "./pages/ActorPage"
import MoviePage from "./pages/MoviePage"
import DirectorPage from "./pages/DirectorPage"
import GanrePage from "./pages/GanrePage"
import CategoryPage from "./pages/CategoryPage"
import React, {useState } from "react"
import LayoutPage from "./components/Layout"
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const App = () => {

  const queryClint = new QueryClient();

  const getAuth = ():boolean => {
    const auth = localStorage.getItem("auth");

    return auth ? JSON.parse(auth) === true : false;
  }

  const [isAuth, setIsAuth] : [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ] = useState(getAuth())

  return (
    <QueryClientProvider client={queryClint}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage setIsAuth={setIsAuth}/>}/>
                <Route element={isAuth ? <LayoutPage/> : <Navigate to={"/"}/>}>
                <Route path="admin/actor" element={<ActorPage/>}/>
                <Route path="admin/movie" element={<MoviePage/>}/>
                <Route path="admin/director" element={<DirectorPage/>}/>
                <Route path="admin/ganre" element={<GanrePage/>}/>
                <Route path="admin/category" element={<CategoryPage/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
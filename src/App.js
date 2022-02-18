import {Routes, Route, Redirect, Navigate} from "react-router-dom";

import './App.css';
import Layout from './Layout/Layout';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import GenresPage from './pages/GenresPage/GenresPage';
import MoviesInfo from './pages/MoviesInfo/MoviesInfo';

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                {/*<Route element={<Navigate to={'/movies'}/>}>*/}

                    <Route index element={<MoviesPage/>}/>
                    <Route path={':id/info'} element={<MoviesInfo/>}/>
                <Route path={'/genres'} element={<GenresPage/>}></Route>
            </Route>
        </Routes>
    );
};

export default App;
import {Routes, Route, Link} from "react-router-dom";
import UsersPage from './pages/UsersPage/UsersPage';
import PostsPage from './pages/PostsPage/PostsPage';
import Layout from './components/Layout/Layout';
import SinglePost from './pages/SinglePost/SinglePost';

import './App.css';

const App = () => {
  return (
      <>
          <Routes>
              <Route path={'/'} element={<Layout/>}>
                  <Route index element={<UsersPage/>}/>
                  <Route path={'posts'} element={<PostsPage/>}>
                      <Route path={':id'} element={<SinglePost/>}/>
                  </Route>
              </Route>

          </Routes>
      </>
  );
};

export default App;
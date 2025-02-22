import './App.css';
import { HashRouter, NavLink, Outlet, Route, Routes, useNavigate, useParams } from 'react-router-dom';

const Todo = () => {
  return (
    <>
      <p>這是 Todo 頁面</p>
      <Logout></Logout>
    </>
  )
};
const Login = () => {
  return <p>這是登入頁面</p>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};

const Logout = () => {
  const navigate = useNavigate();
  const logout = () => {
    navigate('/login')
  }
  return <button type='button' onClick={logout}>登出</button>
}

const Post = () => {
  return (
    <>
      <p>Post頁面</p>
      <Outlet></Outlet>
    </>)
}

const PostId = () => {
  const params = useParams();
  return <p>{`postId: ${params.postId}`}</p>
}

function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
          <NavLink to='/post'>
            <p>Post 詳細頁面</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
        <Routes>
          <Route path='/'></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/todo' element={<Todo></Todo>}></Route>
          <Route path='/post' element={<Post></Post>}>
            <Route path=':postId' element={<PostId></PostId>}></Route>
          </Route>
        </Routes>
        {/* 練習區 */}
      </HashRouter>
    </div>
  );
}

export default App;

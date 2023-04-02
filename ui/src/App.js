import logo from './logo.svg';
import './App.css';
import Home from './views/Home'
import NotFound from './views/NotFound'
import Layout from './layouts'
import {Routes, Route} from 'react-router-dom'
import ThemeContextProvider from './context/themeContext'

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            {/* <Route path="/user/:username" element={<UserProfile/>}/> */}
            {/* <Route path="/login" element={<Login/>}/> */}
            {/* <Route path="/user/logout" element={<Logout/>}/> */}
            <Route path="*" element={<NotFound/>}/>
          </Route>
        </Routes>
      </ThemeContextProvider>
    </div>
  );
}

export default App;

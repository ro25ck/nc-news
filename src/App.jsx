import './App.css'
import Home from './components/home/Home'
import Navbar from './components/Navbar'
import Topics from './components/Topics'
import Articles from './components/Articles'
import Comments from './components/Comments'
import Profile from './components/Profile'
import { Route, Routes } from 'react-router-dom'
import SingleArticle from './components/singleArticle/SingleArticle.jsx'
import Header from './components/header/Header.jsx'


function App() {
   return (<> 
   <Header />
    <main>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/articles' element={<Articles />} />
            <Route path='/topics' element={<Topics />} />
            <Route path='/comments' element={<Comments />} />
            <Route path='/users' element={<Profile />} />
            <Route path='/articles/:article_id' element={<SingleArticle />}></Route>
        </Routes>
    </main>
   </>)
}

export default App

import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Topics from './components/Topics'
import Articles from './components/Articles'
import Comments from './components/Comments'
import Users from './components/Users'
import { Route, Routes } from 'react-router-dom'
import SingleArticle from './components/SingleArticle'


function App() {
   return (<> 
   <Navbar />
    <main>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/articles' element={<Articles />} />
            <Route path='/topics' element={<Topics />} />
            <Route path='/comments' element={<Comments />} />
            <Route path='/users' element={<Users />} />
            <Route path='/articles/2' element={<SingleArticle />}></Route>
        </Routes>
    </main>
   </>)
}

export default App

//@flow

import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import EducationalResources from './components/EducationalResources/EducationalResources.jsx'
import News from './components/News.jsx';
import InspirationHub from './components/InspirationHub/InspirationPage1.jsx'


function App() {

  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/educationalResources' element={<EducationalResources/>}></Route>
          <Route path='/News' element={<News/>}></Route>
          <Route path='/inspirationHub' element={<InspirationHub/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>

  )
  
}
export default App;

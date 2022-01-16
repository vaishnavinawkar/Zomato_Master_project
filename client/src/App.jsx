import './App.css';


//Layouts
import HomeLayoutHoc from './HOC/Home.hoc';
//pages
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
    
      <HomeLayoutHoc component={HomePage} path="/"/>
      <HomeLayoutHoc component={HomePage} path="/:type"/>

      
    </>
    );
}

export default App;

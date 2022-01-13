
import './App.css';

//HOC
import HomeLayoutHoc from './HOC/Home.hoc';

//Pages
import Homepage from './pages/Homepage';

function App() {
  return (
  <>
    <HomeLayoutHoc component={Homepage} path="/" />
    <HomeLayoutHoc component={Homepage} path="/:type"/>
  </>
  );
}

export default App;

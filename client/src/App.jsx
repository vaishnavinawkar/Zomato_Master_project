import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Redirect, Route } from 'react-router'
// import {Switch} from 'react-router-dom';

//Layouts
import HomeLayoutHoc from './HOC/Home.hoc';
import RestaurantLayoutHoc from './HOC/Restaurant.hoc';

//pages
import HomePage from './pages/HomePage';
import RestaurantPage from './pages/RestaurantPage';


function App() {
  return (
    <>
    
      <Route path="/" exact>
        <Redirect to="/delivery" />
      </Route>
      {/* <HomeLayoutHoc component={HomePage} path="/"/> */}
      <HomeLayoutHoc exact component={HomePage} path="/:type"/>
      <RestaurantLayoutHoc
        path='/restaurant/:id'
        exact
        component={RestaurantPage}
      />

      <RestaurantLayoutHoc 
      path='/restaurant/:id/overview' 
      exact 
      component={HomePage}
      />
      <RestaurantLayoutHoc
        path="/restaurant/:id/order-online"
        exact
        component={HomePage}
      />
      <RestaurantLayoutHoc
        path="/restaurant/:id/reviews"
        exact
        component={HomePage}
      />
        <RestaurantLayoutHoc
        path="/restaurant/:id/menu"
        exact
        component={HomePage}
      />
      <RestaurantLayoutHoc
        path="/restaurant/:id/photos"
        exact
        component={HomePage}
      />

    </>
    );
}

export default App;

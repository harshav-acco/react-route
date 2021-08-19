import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contactUs">Contact Us </Link></li>
        </ul>
        <hr />

        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="/contactUs"><ContactUs /></Route>
        </Switch>
      </div>
    </Router>
  )
}

const Home = () => <div>Hello, I am Home</div>

const ContactUs = () => {
  const routeMatch = useRouteMatch();
  const url = routeMatch.url;

  return (
    <div>
      <h3>Contact us at below branches</h3>
      <ul>
        <li>
          <Link to={`${url}/vskp`}>Visakhapatnam</Link>
        </li>
        <li>
          <Link to={`${url}/bgl`}>Bangalore</Link>
        </li>
        <li>
          <Link to={`${url}/chn`}>Chennai</Link>
        </li>
      </ul>
      <Switch>
        <Route path={url} exact> 
          <h3>Please select a city to contact us</h3>
        </Route>
        <Route path={`${url}/:cityName`}> 
          <City />
        </Route>
      </Switch>
    </div>
  )
};

const City = () => {
  const { cityName } = useParams();
  
  const cities = {
    vskp: "Vizag",
    chn: "chennai",
    bgl: "Bengaluru"
  }
  return (
    <div>
      Hi, you have reached {cities[cityName]}.
    </div>
  )
}

export default App;

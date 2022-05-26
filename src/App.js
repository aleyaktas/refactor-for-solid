import Navbar from "./component/Navbar";
import Home from "./component/Home";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import BlogDetails from "./component/BlogDetails";
import CreateBlog from "./component/CreateBlog";
import NotFound from "./component/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/blogger-react-app/">
              <Home />
            </Route>
            <Route exact path="/blogger-react-app/newblog">
              <CreateBlog />
            </Route>
            <Route exact path="/blogger-react-app/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="/blogger-react-app/*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

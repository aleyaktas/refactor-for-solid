import Navbar from "./Navbar";
import Home from "./Home";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import BlogDetails from "./BlogDetails";
import CreateBlog from "./CreateBlog";
import NotFound from "./NotFound";

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

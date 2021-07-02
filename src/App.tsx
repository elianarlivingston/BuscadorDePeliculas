import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { CustomLayout } from './Layouts'
import { Home, Movies, MovieDetail, MoviesSearch, Error } from './views'

export default function App() {
  return (
    <Router>
      <CustomLayout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/movies/:type">
            <Movies />
          </Route>

          <Route path="/movie/:id">
            <MovieDetail />
          </Route>

          <Route path="/search/movie">
            <MoviesSearch />
          </Route>
          
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </CustomLayout>
    </Router>
  );
}
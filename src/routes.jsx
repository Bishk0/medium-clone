import { Route, Switch } from "react-router-dom";
import Article from "./pages/article";
import Authentication from "./pages/authentication";
import GlobalFeed from "./pages/globalFeed";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={GlobalFeed} />
      <Route path="/login" component={Authentication} />
      <Route path="/register" component={Authentication} />
      <Route path="/article/:slug" component={Article} />
    </Switch>
  );
}

export default Routes;

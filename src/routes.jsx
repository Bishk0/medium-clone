import { Route, Switch } from "react-router-dom";
import Article from "./pages/article";
import Authentication from "./pages/authentication";
import GlobalFeed from "./pages/globalFeed";
import TagFeed from "./pages/tagFeed";
import YourFeed from "./pages/yourFeed";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={GlobalFeed} />
      <Route path="/feed" component={YourFeed} />
      <Route path="/tags/:slug" component={TagFeed} />
      <Route path="/login" component={Authentication} />
      <Route path="/register" component={Authentication} />
      <Route path="/article/:slug" component={Article} />
    </Switch>
  );
}

export default Routes;

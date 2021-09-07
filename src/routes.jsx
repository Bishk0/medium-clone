import { Route, Switch } from "react-router-dom";
import Article from "./pages/article";
import GlobalFeed from "./pages/globalFeed";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={GlobalFeed} />
      <Route path="/article/:slug" component={Article} />
    </Switch>
  );
}

export default Routes;

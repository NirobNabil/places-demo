import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Link
} from "react-router-dom";
import RouteWithSubRoutes from "./components/Routes";
import routes from "./routes";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

function App() {
  return (         
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
          <Redirect to="/" />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;

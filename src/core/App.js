import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import ChapterListQuery from "../chapters/ChapterListQuery";
import AstrosListQuery from "../chapters/AstrosListQuery";
import FootballListQuery from "../chapters/FootballListQuery";
import BasketballListQuery from "../chapters/BasketballListQuery";
import chapterResolvers from "../chapters/resolvers";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "../Nav";
import "./App.css";
import { Home } from "./Home";

const client = new ApolloClient({
  clientState: chapterResolvers
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <Router>
            <div>
              <Nav />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/baseball" component={ChapterListQuery} />
                <Route exact path="/astros" component={AstrosListQuery} />
                <Route exact path="/football" component={FootballListQuery} />
                <Route
                  exact
                  path="/basketball"
                  component={BasketballListQuery}
                />
              </Switch>
            </div>
          </Router>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;

//<ChapterListQuery />
//<AstrosListQuery />

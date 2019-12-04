import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Menu from 'modules/Menu';
import Home from 'routes/Home';
import Posts from 'routes/Posts';
import SignIn from 'routes/SignIn';
import Footer from 'modules/Footer';

export default React.memo(() => (
  <>
    <Menu />
    <Switch>
      <Route path="/posts">
        <Posts />
      </Route>
      <Route path="/sign-in">
        <SignIn />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
    <Footer />
  </>
));

// export default connect((state, props) => {
//   return {
//     // name: state.users.name
//   };
// })(App)

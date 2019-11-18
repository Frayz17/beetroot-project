import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Link } from 'react-router-dom';
import Menu from 'modules/Menu';
import Home from 'routes/Home';
import Posts from 'routes/Posts';
import SignIn from 'routes/SignIn';

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
  </>
));

// class App extends React.Component {
//   render = () => {
//     return (
//       <>
//         <Menu />
//         <Switch>
//           <Route path="/posts">
//             <Posts />
//           </Route>
//           <Route path="/sign-in">
//             <SignIn />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </>
//     );
//   };
// }

// export default connect((state, props) => {
//   return {
//     // name: state.users.name
//   };
// })(App);

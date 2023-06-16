// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AdminDashboard from '/Components/AdminDashboard';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/admin/dashboard" component={AdminDashboard} />
        {/* Add more routes for other pages */}
      </Switch>
    </Router>
  );
};

export default App;

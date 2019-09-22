import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/common/Header';
import List from './components/list/List';
import Det from './components/detail/Detail';
import NotFound from './components/notFound/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <div>
      <Header />

         <Switch>
          <Route exact path="/" component={List}  />
          <Route path="/currencies/:id" component={Det} />
          <Route component={NotFound} />
         </Switch>
        </div>
    </BrowserRouter>
  )
}

export default App;

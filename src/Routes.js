import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Search from './container/Search';
import Faq from './container/Faq';
import People from './container/People';
import Tweets from './container/Tweets';
import NotFound from './container/NotFound';


class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Search} />
        <Route exact path='/search' component={Search} />
        <Route path='/people/:personId' component={People} />
        <Route path='/tweets/:personId/:categoryId' component={Tweets} />
        <Route exact path='/faq' component={Faq} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default Routes;

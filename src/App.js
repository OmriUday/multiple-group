import { Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import NewPost from './pages/NewPost';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/new-post'>
          <NewPost />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
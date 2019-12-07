import React, {useEffect} from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Page from './pages'
import './assets/css/main.css'
import { connect } from 'react-redux'
import { initGA, logEvent, pageView } from './util/analytics/ga'
import { try_login } from './store/actions/userAction'

function App(props) {

  useEffect(()=>{
    initGA()
    pageView()
    props.try_login()
  }, [])

  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Page.CollectionPage} />
        <Route path="/note/:id" component={Page.NotePage} />
      </Router>
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = {
  try_login
}


export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, {useEffect} from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Page from './pages'
import './assets/css/main.css'
import { connect } from 'react-redux'
import { initGA, logEvent, pageView } from './util/analytics/ga'

function App(props) {

  useEffect(()=>{
    initGA()
    pageView()
  })

  if (!props.user.isLogin){
    logEvent("appPage", "not login")
    window.location.href = "https://kaptuer.com";
  }

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

export default connect(mapStateToProps, null)(App);

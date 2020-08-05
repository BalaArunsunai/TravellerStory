import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home/home'
import AddStoryTimeline from './components/add-story-timeline/addStoryTimeline'
import StoriesOnGoing from './components/stories-on-going/storiesOnGoing'
import ViewStory from './components/view-story/viewStory'

function App() {
  return (
    <div className="app">
    <div className="mainHeader"><h5>Traveler Stories</h5></div>
    <div className="pageContent">
    <Router>
      <Switch>
        <Route path="/" component={Home}></Route>
        <Route path="/AddStoryTimeline" component={AddStoryTimeline}></Route>
        <Route path="/StoriesOnGoing" component={StoriesOnGoing}></Route>
        <Route path="/ViewStory" component={ViewStory}></Route>
      </Switch>
    </Router>
    </div>
    </div>
  );
}

export default App;

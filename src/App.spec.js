import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Home from './components/Home/home'
import AddStoryTimeline from './components/add-story-timeline/addStoryTimeline'
import StoriesOnGoing from './components/stories-on-going/storiesOnGoing'
import ViewStory from './components/view-story/viewStory'
describe('App', () => {
  let wrapper;

  wrapper = shallow(<App />);
  const pathMap = wrapper.find('Route').reduce((pathMap, route) => {
  const routeProps = route.props();
    pathMap[routeProps.path] = routeProps.component;
    return pathMap;
  }, {});
  it('should render correctly', () => expect(wrapper).toMatchSnapshot());
  it('should render route', () => {
    expect(pathMap['/']).toBe(Home);
  })
  it('should render route', () => {
    expect(pathMap['/AddStoryTimeline']).toBe(AddStoryTimeline);
  })
  it('should render route', () => {
    expect(pathMap['/StoriesOnGoing']).toBe(StoriesOnGoing);
  })
  it('should render route', () => {
    expect(pathMap['/ViewStory']).toBe(ViewStory);
  })
  it('should render a div', () => {
    expect(wrapper.find('div').length).toEqual(3);
  });
  // it('should render a Router', () => {
  //   expect(wrapper.find('Router').length).toEqual(2);
  // });
  it('should render a Switch', () => {
    expect(wrapper.find('Switch').length).toEqual(1);
  });
  it('should render a Route', () => {
    expect(wrapper.find('Route').length).toEqual(4);
  });

  // it('should render the Calculator Component', () => {
  //   expect(wrapper.containsMatchingElement(<Calculator />)).toEqual(true);
  // });
});


// Import React and React-DOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
//Create React component
const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail/>
    </div>
  )
};
// Take the React component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);

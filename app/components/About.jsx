var React = require('react');

// var About = React.createClass({
//   render: function(){
//     return(
//       <h3>About Component</h3>
//     )
//   }
// });

var About = (props) => {
  return(
    <div>
      <h1 className="text-center">About</h1>
      <p>Weather app build using React, styling using Foundation.</p>
      <p>Here are some of the tools used in this project</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - The JavaScript framework.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - The API used.
        </li>
      </ul>
    </div>

  )
};

module.exports = About;

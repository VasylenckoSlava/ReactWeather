var  React = require('react');
var {Link} = require('react-router');
// var Examples = React.createClass({
//   render: function () {
//     return(
//       <h3>Examples</h3>
//     );
//   }
// });

var Examples = (props) => {
  return(
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Kharkiv'>Kharkiv</Link>
        </li>
        <li>
         <Link to='/?location=Lviv'>lviv,Ukraine</Link>
        </li>
      </ol>
    </div>
  );
};
module.exports = Examples;

var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');
require('./index.css');
var App = require('./components/App');
// class Users extends React.Component {
//   render() {
    
//  var friend = this.props.list.filter(function(names){
//     return names.friend === true});
    
// var Notfriend = this.props.list.filter(function(names){
//   return names.friend !== true}); 
    
//     return (
//       <div>
//         <h1>Friends</h1>
//         <ul>
//           {/*Create an <li> for every name in the list array who is also your friend*/
          
//            friend.map(function(user){
//             return (
//             <li key ={user.name}>
//             {user.name}
//             </li>
//           )
//         })
//           }
//         </ul>
        
//         <hr />
        
//         <h1> Non Friends </h1>
//         <ul>
//           {/*Create an <li> for every name in the list array who is NOT your friend*/
//           Notfriend.map(function(user){
//             return (
//             	<li key ={user.name}>
//             	{user.name}
//             	</li>
//             	)
//           })
//           }
//         </ul>        
//       </div>
//     )
//   }
// }

// Users.propTypes={
// 	list:PropTypes.arrayOf(PropTypes.shape({
// 		name:PropTypes.string.isRequired,
// 		friend:PropTypes.bool.isRequired
// 	}))
// }

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
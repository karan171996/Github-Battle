var React = require('react');
var NavLink = require('react-router-dom').NavLink;
function Nav() {
	return(
		<ul className ='nav'>
		  <li>
		     <NavLink exact activeElement ='active' to='/'>
		     Home
		     </NavLink>
          </li>
          <li>
             <NavLink activeElement ='active' to='/battle'>
             Battle
             </NavLink>
          </li>
          <li>
             <NavLink activeElement ='active' to='/popular'>
             Popular
             </NavLink>
          </li>

		</ul>
		)
}
module.exports = Nav;
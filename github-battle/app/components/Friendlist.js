var React = require('react');
var PropTypes = require('prop-types');

function Friendlist(props){
	return (
		<div>
	   <ul>
	   	{ props.name.map(function(names) {
	   		return (
	   			<li key={names}>{names}</li>
	   			)
	    })
	   }
	   </ul>
	   </div>
	   )
}

module.exports = Friendlist;
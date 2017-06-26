var React = require('react');
var Link = require('react-router-dom').Link;
var Time = require('./Clock');


class Home extends React.Component {
	render(){
        
         return(
         	 <div className='home-container'>
                <h1>Github Battle :Battle your friends ... and stuff.</h1>
                 
                <Link className='button' to='/battle'>
                Battle
                </Link>
              <Time />
             </div>
         	 )

        }
}

module.exports = Home
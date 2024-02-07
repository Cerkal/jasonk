
import React from 'react';
import config from '../../config.json';
import { withRouter } from '../../hooks/withRouter';

let links = [];

config.links.forEach((obj, index) => {
	links.push(<li key={index} to={obj.link}>{obj.name}</li>);
});


class NavbarMobile extends React.Component{

    constructor(props){
        super(props);
		this.state = {
			showChild: false
		};
    }
	
	getSnapshotBeforeUpdate(prevProps) {
		return { notifyRequired: prevProps.display !== this.props.display };
	}
	    
	componentDidUpdate(prevProps, prevState, snapshot) {
		if (snapshot.notifyRequired) {
		  this.updateAndNotify();
		}
	  }

	updateAndNotify = () => {
		if (this.props.display) {
			this.openChild();
		} else {
			this.closeChild();
		}
	  }

    closeChild = () => {
		this.setState({
			showChild: false
		});
		this.setDispatch();
	};

	setDispatch = () => {
		const event = new Event('selected', {
			details: true
		});
		document.dispatchEvent(event);
	}

	openChild = () => {
		console.log('open child');
		this.setState({
			showChild: true
		});
	};

	render() {
		return (
			<div className={`menu ${this.state.showChild ? 'open' : ''}`}>
            	<div className="menu-icon-close" onClick={this.closeChild}>
              	<div className='close-icon'></div>
              </div>
            <div className='site-navigation-links'>
				<ul>
					<li onClick={() => {this.props.navigate('/'); this.closeChild()}}>Home</li>
					<li onClick={() => {this.props.navigate('/websites'); this.closeChild()}}>Websites</li>
					<li onClick={() => {this.props.navigate('/landing'); this.closeChild()}}>Landing Pages</li>
					<li onClick={() => {this.props.navigate('/scripts'); this.closeChild()}}>Scripts</li>
					<li onClick={() => {this.props.navigate('/games'); this.closeChild()}}>Games</li>
					<li onClick={() => {this.props.navigate('/about'); this.closeChild()}}>About</li>
				</ul>
            </div>
          </div>
		);
	}
}

export default withRouter(NavbarMobile);

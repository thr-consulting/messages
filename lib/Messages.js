import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import IPropTypes from 'react-immutable-proptypes';
import hash from 'string-hash';
import {Grid} from 'semantic-ui-react';
import Message from './Message';

function Messages(props) {
	if (props.messages.size === 0) return null;
	return (
		<Grid.Row>
			<Grid.Column className={props.className}>
				{props.messages.valueSeq().map(value => <Message message={value} key={hash(value)}/>)}
			</Grid.Column>
		</Grid.Row>
	);
}

Messages.propTypes = {
	messages: IPropTypes.map.isRequired,
	className: PropTypes.string,
};

const mapStateToProps = state => ({
	messages: state.get('messages'),
});

export default connect(mapStateToProps)(Messages);

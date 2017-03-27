/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Message as SMessage, Icon} from 'semantic-ui-react';
import {clearMessage} from './messagesActions';

function Message(props) {
	const warning = props.message.level === 'warning';
	const error = props.message.level === 'error';
	const info = props.message.level === 'info';
	const success = props.message.level === 'success';

	return (
		<SMessage warning={warning} error={error} info={info} success={success}>
			<Icon name="close" onClick={() => props.clearMessage(props.message.id)}/>
			<SMessage.Header>{props.message.title}</SMessage.Header>
			<p>{props.message.message}</p>
		</SMessage>
	);
}

Message.propTypes = {
	clearMessage: PropTypes.func.isRequired,
	message: PropTypes.shape({
		id: PropTypes.string.isRequired,
		level: PropTypes.string.isRequired,
		message: PropTypes.string,
		title: PropTypes.string.isRequired,
	}),
};

const mapDispatchToProps = dispatch => bindActionCreators({
	clearMessage,
}, dispatch);

export default connect(null, mapDispatchToProps)(Message);

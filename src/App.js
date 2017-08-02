import React from 'react';
import {Grid, Header} from 'semantic-ui-react';
import {MessageComponent} from './lib/Message';

const propsSingle = {
	clearMessage() {
		console.log('Clearing message');
	},
	message: {
		id: '1',
		level: 'success',
		message: 'This is a message',
		title: 'This is a title',
	},
};

const propsArray = {
	clearMessage() {
		console.log('Clearing message');
	},
	message: {
		id: '1',
		level: 'success',
		message: [
			'This is the first message',
			'This is the second message',
			'This is the third message',
		],
		title: 'This is a title',
	},
};

export default function App() {
	return (
		<Grid container>
			<Grid.Row>
				<Grid.Column>
					<Header as="h1">Messages Demo</Header>
				</Grid.Column>
			</Grid.Row>
			<Grid.Row>
				<Grid.Column>
					<MessageComponent {...propsSingle}/>
					<MessageComponent {...propsArray}/>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
}

import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {Map} from 'immutable';
import {Messages} from '../dist';

before(() => {
	sinon.stub(console, 'error').callsFake(warning => {
		throw new Error(warning);
	})
});
after(() => {
	console.error.restore()
});

const initialState = {
	messages: new Map({
		default: {
			id: 'myid',
			level: 'success',
			message: 'This is a message',
			title: 'This is a title',
		},
	}),
};

const store = createStore((state) => state, initialState);

describe('Messages', () => {
	it('renders without error', () => {
		shallow(<Provider store={store}>
			<Messages/>
		</Provider>);
	});
});

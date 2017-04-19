export const ADD_MESSAGE = 'ADD_MESSAGE';
export const CLEAR_MESSAGE = 'CLEAR_MESSAGE';
export const CLEAR_MESSAGES = 'CLEAR_MESSAGES';

/**
 * Adds a message banner.
 * @memberOf model:addons/messages
 * @tag Action
 * @param {string} level - A message level. One of: success, error, warning, info, or a Semantic UI color.
 * @param {string} message - The text message.
 * @param {string} title - The message title.
 * @param {string} id - A unique ID to identify your message. Optional.
 * @returns {ReduxAction}
 */
export function addMessage(level, message, title, id) {
	return {
		type: ADD_MESSAGE,
		message: {
			id: id || Math.random().toString(36).substring(7),
			level,
			message,
			title,
		},
	};
}

/**
 * Adds a success message banner.
 * @memberOf module:addons/messages
 * @tag Action
 * @param {string} message - The text message.
 * @param {string} title - The message title.
 * @param {string} id - Unique ID. Optional.
 * @returns {ReduxAction}
 */
export function addSuccessMessage(message, title = 'Success', id = 'success') {
	return addMessage('success', message, title, id);
}

/**
 * Adds an error message banner.
 * @memberOf module:addons/messages
 * @tag Action
 * @param {string} message - The text message.
 * @param {string} title - The message title.
 * @param {string} id - Unique ID. Optional.
 * @returns {ReduxAction}
 */
export function addErrorMessage(message, title = 'Error', id = 'error') {
	return addMessage('error', message, title, id);
}

/**
 * Adds a warning message banner.
 * @memberOf module:addons/messages
 * @tag Action
 * @param {string} message - The text message.
 * @param {string} title - The message title.
 * @param {string} id - Unique ID. Optional.
 * @returns {ReduxAction}
 */
export function addWarnMessage(message, title = 'Warning', id = 'warn') {
	return addMessage('yellow', message, title, id);
}

/**
 * Clears a specific message.
 * @memberOf module:addons/messages
 * @tag Action
 * @param {string} id - The unique id of the message to clear.
 * @returns {ReduxAction}
 */
export function clearMessage(id) {
	return {
		type: CLEAR_MESSAGE,
		id,
	};
}

/**
 * Clears all messages.
 * @memberOf module:addons/messages
 * @tag Action
 * @returns {ReduxAction}
 */
export function clearMessages() {
	return {
		type: CLEAR_MESSAGES,
	};
}

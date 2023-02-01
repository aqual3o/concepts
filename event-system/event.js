const eventLib = {};

const __eventManager = {};

eventLib.on = (eventName, cb) => {
	if (!__eventManager [eventName])
		__eventManager [eventName] = [];

	__eventManager [eventName].push (cb);
};

eventLib.emit = (eventName, eventData) => {
	__callInterestedParties (eventName, eventData);
};

const __callInterestedParties = (eventName, eventData) => {
	if (!__eventManager [eventName])
		return;

	for (let i = 0 ; i < __eventManager [eventName].length ; i++) {
		let cb = __eventManager [eventName] [i];
		cb (eventName, eventData);
	}
};

module.exports = eventLib;

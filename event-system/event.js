class EventManager {
	constructor(eventName) {
		this.eventName    = eventName;
		this.callbacks    = []; 

		this.emit         = this.emit.bind(this);
		this.registerCB   = this.registerCB.bind(this);
		this.unregisterCB = this.unregisterCB.bind(this);
	} 
	
	registerCB(cb) {
		this.callbacks.push(cb);
	} 
	
	unregisterCB(cb) {
		const index = this.callbacks.indexOf(cb); 
		
		if (index > -1 && index < this.callbacks.length) {
			this.callbacks.splice(index, 1);
		}
	} 
	
	emit(data) {
		this.callbacks.forEach((cb) => {
			cb(data);
		});
	}
}

class EventDispatcher {
	constructor() {
		this.__eventList = {}; 
		
		this.on       = this.on.bind(this);
		this.off      = this.off.bind(this);
		this.dispatch = this.dispatch.bind(this);
	} 

	dispatch(eventName, eventData) {
		const event = this.__eventList[eventName]; 
		
		if (event) {
			event.emit(eventData);
		}
	} 

	on(eventName, cb) {
		let event = this.__eventList[eventName]; 
		
		if (!event) {
			event = new EventManager(eventName);
			this.__eventList[eventName] = event;
		} 
		
		event.registerCB(cb);
	} 
	
	off(eventName, cb) {
		let event = this.__eventList[eventName]; 
		
		if (event?.callbacks.indexOf(cb) > -1) {
			event.unregisterCB(cb); 
			
			if (event.callbacks.length === 0) {
				delete this.__events[eventName];
			}
		}
	}
} 

module.exports = EventDispatcher;

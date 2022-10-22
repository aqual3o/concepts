/*
 * How to write a specific debounce function
 */

const cooldown = 2 * 1000; /* 2 seconds */
let timeoutId = null;

function debouncedFunction () {

	/* Clear any previous scheduled execution */
	clearTimeout (timeoutId);

	/* Schedule a new execution after cooldown period of last event fire */
	timeoutId = setTimeout (() => {
		/* Actual function logic here */
		console.log ('I did some work');
	}, cooldown);
}

/*
 * TEST
 */
for (let i = 0; i <= 10 ; i++) {
	debouncedFunction ();
}

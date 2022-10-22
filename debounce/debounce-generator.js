/*
 * Higer order function to generate debounced forms of existing function
 */


/*
 * Generator takes in vanilla function and the debounce delay as args
 */
function debounceGenerator (fn, cooldown = 5000) {
	let timeoutId;
	const context = this;

	return (...args) => {
		clearTimeout (timeoutId);

		timeoutId = setTimeout (() => {fn.apply (context, args);}, cooldown);
	};
}


function work (workName) {
	console.log (`Work that I did today is : ${workName}`);
}


const debouncedWork = debounceGenerator (work, 2 * 1000);



/*
 * TEST
 */
for (let i = 0; i <= 10 ; i++) {
	debouncedWork ("Play");
}

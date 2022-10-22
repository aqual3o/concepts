## Debounce
Is the concept of delaying the execution of a function against a certain event or action.

#### Example
Imagine you execute a `function` to show suggestion against user input in some search element. These inputs are perhaps pulled from backend via API calls. Making an API call on every single `keypress` is expensive.
What you can do is -> delay the function execution till user has stopped typing for let's say 1 second. Since people type in bursts, and don't care about suggestions till they have paused typing, you will end up making fewer API calls.

Advantages
- Performance improvements

#### Concepts used
- rest `...` operator
- `apply` method for functions
- `apply` vs `call` method for function

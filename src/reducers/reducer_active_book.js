// Reducers can take two arguments, the current state and
// an action. Reducers are only called when an action 
// occurs. 

// On application load, the initial state will be undef.
// So, add ES6 default parameter to set state to null, 
// React will throw an error for undef state.
export default function(state = null, action) {
	switch(action.type) {
		case 'BOOK_SELECTED': 
			return action.payload; 
	}
	
	// All actions are passed through all the reducers.
	// So, there needs to be a way for reducers to recognize
	// relevant actions, and to do nothing for actions that 
	// do not apply.
	return state;
}
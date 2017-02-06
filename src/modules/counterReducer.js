export default function(state, action) {
  if (action.type === 'INCREMENT') {
    return Object.assign({}, state, {
      number: state.number + 1
    });
  }
  return state;
}

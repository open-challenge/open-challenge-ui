const initialState = {
  logs: [],
}
export default function LogsReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_LOG':
      return {
        ...state,
        logs: [...state.logs,action.newLog]
      };
    case 'CLEAN_LOGS':
      return {
        ...state,
        logs: []
      };
    default:
      return state;
  }
}

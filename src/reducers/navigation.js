const inititialState = {
   inputSearch: "",
   activeButton: "all",
   addValue: ""
}

export default function navigation(state = inititialState, action) {
   switch (action.type) {
      case 'SEARCH_ITEM':
         return {
            ...state,
            inputSearch: action.payload
         };
      case 'CHANGE_BUTTON':
         return {
            ...state,
            activeButton: action.payload
         };
      case 'CHANGE_ADD_INPUT':
         return {
            ...state, addValue: action.payload
         };
      case 'CLEAR_ADD_INPUT':
         return {
            ...state, addValue: ''
         };
      default:
         return state;
   }
}
const inititialState = [{
      text: "Marina",
      important: false,
      active: true,
      id: 1
   },
   {
      text: "Vasiliy",
      important: false,
      active: true,
      id: 2
   },
   {
      text: "Kiril",
      important: false,
      active: true,
      id: 3
   },
   {
      text: "Roman",
      important: false,
      active: true,
      id: 4
   }
];

export default function toDoList(state = inititialState, action) {
   switch (action.type) {
      case 'ADD_ITEM':
         return [...state, action.payload];
      case 'REMOVE_ITEM':
         return [
            ...state.slice(0, action.payload),
            ...state.slice(action.payload + 1)
         ];
      case 'IMPORTANT_ITEM':
         return [
            ...state.slice(0, action.payload),
            {
               ...state[action.payload],
               important: !state[action.payload].important
            },
            ...state.slice(action.payload + 1)
         ];
      case 'DONE_ITEM':
         return [
            ...state.slice(0, action.payload),
            {
               ...state[action.payload],
               active: !state[action.payload].active
            },
            ...state.slice(action.payload + 1)
         ];
      default:
         return state;
   }
}
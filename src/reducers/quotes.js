export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return state.push(action.quote)    
    
      case 'REMOVE_QUOTE':
        return state.filter(quote => quote.id === action.quoteId)

  }
  
  return state;
}

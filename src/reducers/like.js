export default (like = [], action) => {
    switch (action.type) {
      
      case 'GETLIKE':
        return  [...like,action.payload];
        
      
      default:
        return like;
    }
  };
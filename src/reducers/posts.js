export default (posts = [], action) => {
    switch (action.type) {
      
      case 'CREATE':
        return [...posts, action.payload];
      case 'GET':
        return action.payload;
      default:
        return posts;
    }
  };
  
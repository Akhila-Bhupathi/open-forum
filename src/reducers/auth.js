const authReducer=(state={authData:null},action)=>{
    switch (action.type)
     {
        case 'AUTH':
            console.log(action?.data);
           localStorage.setItem('profile',JSON.stringify({...action?.data}));
           return {...state,authData:action?.data.result}
           
        case 'LOGOUT':
            localStorage.clear();
            return {...state,authData:null};
        case "SEND":
            console.log(action?.result);
            return state;
        default:
            return state;

        
    }

}
export default authReducer;
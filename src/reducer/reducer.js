const initialstate={
   val:[]
}

function Reducer(state={initialstate},action ) {  
    switch (action.type) {
        case "edit":
            return{
                val:action.payload
                
            }
        default:return state     
    }
   }
export default Reducer

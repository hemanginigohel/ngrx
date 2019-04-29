import * as dataFormat from "../app/data-format";
import * as action$ from "../app/app.action";
const initialstate: dataFormat.State = {
    loading: false,
    failed: false,
    posts: [],
    errorMsg :""
}
export function Reducer(state = initialstate, action: action$.allType) {
    console.log("In reducer::", state)
    switch (action.type) {
        case action$.LOAD: {
            return {
                ...state,
                loading: true,
                failed: false,
                errorMsg:""
            }
        }

        case action$.LOAD_SUCCESS: {
            return {
                ...state,
                loading: false,
                failed: false,
                posts: action.payload,
                errorMsg:""
            }
        }
        
        case action$.LOAD_FAIL :{
            return {
                ...state,
                loading:false,
                failed:true,
                errorMsg : "not found"
            }
        }
    }
}
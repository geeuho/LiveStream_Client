import _ from 'lodash';

export default (state = {}, action) => {
    switch (action.type) {
        case "GET_STREAMS":
            return { ...state, ..._.mapKeys(action.payload, 'id') }
        case "GET_STREAM":
            return { ...state, [action.payload.id]: action.payload }
        case "POST_STREAM":
            return { ...state, [action.payload.id]: action.payload }
        case "EDIT_STREAM":
            return { ...state, [action.payload.id]: action.payload }
        case "DELETE_STREAM":
            return _.omit(state, action.payload)
        default:
            return state
    }


}
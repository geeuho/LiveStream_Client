import streams from '../apis/streams'
import history from '../history'

export const signIn = (userId) => {
    return {
        type: 'SIGN_IN',
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    }
}

export const getStreams = () => async dispatch => {
    const response = await streams.get('/streams')
    dispatch({type: 'GET_STREAMS', payload: response.data})
}

export const getStream = (id, headers, formValues) => async dispatch => {
    const response = await streams.get(`/streams/${id}`, headers, formValues)
    dispatch({type: 'GET_STREAM', payload: response.data})
}

export const createStream = formValues => async (dispatch, getState) => {
    let {userId} = getState().auth
    const response = await streams.post('/streams', {...formValues, userId})
    dispatch({type: 'CREATE_STREAMS', payload: response.data})
    history.push('/')
}

export const editStream = (id, formValues) => async dispatch => {
    const response = await streams.put(`/streams/${id}`, formValues)
    dispatch({type: 'EDIT_STREAM', payload: response.data})
    history.push('/')
}

export const deleteStream = (id) => async dispatch => {
    await streams.delete(`/streams/${id}`)
    dispatch({type: 'DELETE_STREAM', payload: id})
    history.push('/')
}

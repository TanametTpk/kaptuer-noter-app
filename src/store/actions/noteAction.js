import { GET_NOTE , CREATE_NOTE , UPDATE_NOTE, DELETE_NOTE } from '../types'
import axios from 'axios'
import URL from '../../configs/api'

export const getNotes = (collection) => async dispatch => {

    let res = await axios.get(URL + `/note?collectionNote=${collection}` )

    //do something
    dispatch({
        type: GET_NOTE,
        payload: res.data
    })

    return res.data

}

export const createNote = (collection , content) => async dispatch => {

    let res = await axios.post(URL + "/note" , {
        content:content,
        collectionNote:collection
    })

    //do something
    dispatch({
        type: CREATE_NOTE,
        payload: res.data
    })

    return res.data

}

export const updateNote = (collection , note) => async dispatch => {

    let res = await axios.put(URL + `/note/${note._id}` , note)
    
    //do something
    dispatch({
        type: UPDATE_NOTE,
        payload: res.data
    })

    return res.data

}

export const deleteNote = (collection , note) => async dispatch => {

    let res = await axios.delete(URL + `/note/${note._id}` , note)

    //do something
    dispatch({
        type: DELETE_NOTE,
        payload: res.data
    })

    return res.data

}
import { GET_COLLECTION , CREATE_COLLECTION, DELETE_COLLECTION } from '../types'
import axios from 'axios'
import URL from '../../configs/api'

export const getCollections = () => async dispatch => {

    let res = await axios.get(URL + "/collection")

    //do something
    dispatch({
        type: GET_COLLECTION,
        payload: res.data
    })

    return res.data

}

export const createCollection = (name) => async dispatch => {

    let res = await axios.post(URL + "/collection" , {
        name,
    })

    //do something
    dispatch({
        type: CREATE_COLLECTION,
        payload: res.data
    })

    return res.data

}

export const deleteCollection = (id) => async dispatch => {

    let res = await axios.delete(URL + `/collection/${id}`)

    //do something
    dispatch({
        type: DELETE_COLLECTION,
        payload: res.data
    })

    return res.data

}
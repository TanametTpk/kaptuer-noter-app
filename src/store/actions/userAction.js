import API from '../../util/api'
import { LOGOUT } from '../types'

export const logoutUser = () => async dispatch => {

    await API.user.logout();
  
    dispatch({
      type: LOGOUT
    })
  
    window.location.href = "https://kaptuer.com";

}
import API from '../../util/api'
import { LOGIN, LOGOUT } from '../types'
import jwtStorage from '../../util/api/libs/jwtStorage'

const logout = (dispatch) => {

  dispatch({
    type: LOGOUT
  })

  window.location.href = "https://kaptuer.com";

}

export const try_login = () => async dispatch => {

  if (!jwtStorage.isHave()){

    logout(dispatch)

  }else{
    dispatch({
      type: LOGIN
    })
  }

}

export const logoutUser = () => async dispatch => {

    await API.user.logout();
  
    logout(dispatch)

}
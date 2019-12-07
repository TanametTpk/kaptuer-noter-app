import { LOGOUT } from '../types'
import Authization from '../../util/api/libs/jwtStorage'

const initialState = {
  id: "",
  name: "",
  email: "",
  provider_type: "",
  isLogin: Authization.isHave(),
}

export default function (state = initialState, action) {

  switch (action.type) {
    case LOGOUT:
      return {
        ...state,
        name: "",
        username: "",
        provider: "",
        isLogin: false,
      }
    default:
      return state
  }
}
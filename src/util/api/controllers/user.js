import Authorizor from '../libs/authorizationManager'

const logout = () => {

    // remove token
    Authorizor.clear()

}

export default {

    logout,
}
import {
    LoginUser, LOGIN_USER, REGISTER_USER, AUTH_USER
} from '../_actions/types';

export default function (state = {}, action) {

    //타입들이 엄청 많아질거라서
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, loginSuccess: action.payload }
            break;

        case REGISTER_USER:
            return { ...state, register: action.payload }
            break;

        case AUTH_USER:
            return { ...state, userData: action.payload }
            break;

        default:
            return state;
    }
}
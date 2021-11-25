import { DOMAIN_API_URL } from 'src/constants';
// import AuthService from 'src/modules/common/service';

export const SET_USER_INFO = 'SET_USER_INFO';
export const LOG_OUT = 'LOG_OUT';
export const SET_ACCOUNT = 'SET_ACCOUNT';

export const setUserInfo = (user) => ({
    type: SET_USER_INFO,
    payload: user,
});

export const setAccount = (accountId) => ({
    type: SET_ACCOUNT,
    payload: accountId,
});

export const getSession = async (dispatch) => {
    try {
        // let localAccount = {};
        // const res = await AuthService.getSession();
        const userInfo = await new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    userName: 'Thinh Tran',
                    userId: 1659999,
                });
            }, 2000);
        });

        dispatch(setUserInfo(userInfo));
    } catch (err) {
        // AuthService.login();
    }
};

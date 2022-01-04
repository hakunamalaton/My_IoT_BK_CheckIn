import { ACCOUNT_ROLE } from 'src/constants';

const AuthService = {
    login: async (username: string, password: string) => {
        const userInfo = await new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    userName: 'Thinh Tran',
                    userId: 1659999,
                    role: ACCOUNT_ROLE.ADMIN,
                });
            }, 2000);
        });

        return userInfo;
    },

    getSession: async () => {
        const session = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    userName: 'Thinh Tran',
                    userId: 1659999,
                    role: ACCOUNT_ROLE.ADMIN,
                });
                // reject({ msg: 'Session expired' });
            }, 1000);
        });

        return session;
    },
};

export default AuthService;

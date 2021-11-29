export interface IUser {
    vacine_sl_mui: number;
    ho_lot: string;
    ten: string;
    cb_sv_tag: boolean;
    cmnd: string;
    cb_sv_ma: string;
    lastupdatetime: number;
}

const UserService = {
    getInfo: async (id?: number): Promise<IUser> => {
        return await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    vacine_sl_mui: 2,
                    ho_lot: 'Trần Thị Ngọc',
                    ten: 'Trinh',
                    cb_sv_tag: true,
                    cmnd: '123456789',
                    cb_sv_ma: '2000000',
                    lastupdatetime: 1318781876,
                });
            }, 2000);
        });
    },
};

export default UserService;

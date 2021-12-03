import dayjs from 'dayjs';
import { IUser } from '../service';

export const normalizeUserEdit = (user: IUser): any => {
    return {
        ...user,
        lastupdatetime: dayjs.unix(user.lastupdatetime).format('DD/MM/YYYY HH:mm:ss'),
    };
};

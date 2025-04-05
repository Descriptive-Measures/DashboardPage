import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { TokenSet } from '../models/users/token-set.model';
import { User } from '../models/users/user.model';

export const UserActions = createActionGroup({
    source: 'User',
    events: {
        'Load User State': emptyProps(),

        'Thaw Token Set': props<{token_status: any}>(),
        'Freeze Token Set': props<{token_set: any}>(),
        'Clear Token Set': emptyProps(),
        //'Save Token Set': props<{token_set: Readonly<TokenSet>}>(),
        'Token Error': props<{error: string}>(),
        
        'User Login': props<{username: string, password: string}>(),
        'Login Success': props<{token_set: Readonly<TokenSet>}>(),
        'User Logoff': emptyProps(),
        'Logoff Success': emptyProps(),

        'Skip User Refresh': emptyProps(),
        'Save User': emptyProps(),

        'Retrieve User': emptyProps(),
        'Retrieve User Success': props<{user: Readonly<User>}>(),
        'Skip User Retrieve': emptyProps(),
        'User Error': props<{error: string}>(),
    },
});
import {
    DialogState,
    DialogActionTypes as actions,
    DialogReducerAction,
} from './dialogTypes';

const initialState: DialogState = {
    dialogProps: {},
    dialogType: undefined,
};

export const dialogReducer = (
    state = initialState,
    action: DialogReducerAction,
) => {
    switch (action.type) {
        case actions.HIDE_DIALOG:
            return initialState;
        case actions.SHOW_DIALOG:
            const { dialogType, dialogProps } = action.payload;
            return {
                dialogType,
                dialogProps,
            };
        default:
            return state;
    }
};

import { DialogActionTypes as actions, DialogOpts } from './dialogTypes';
import { action } from 'typesafe-actions';

export const showDialog = (dialogOpts: DialogOpts) =>
    action(actions.SHOW_DIALOG, dialogOpts);

export const hideDialog = () => action(actions.HIDE_DIALOG);

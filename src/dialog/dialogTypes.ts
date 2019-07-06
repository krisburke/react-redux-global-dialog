import React from 'react';
import { SuccessDialog } from './SuccessDialog';
import { WarningDialog } from './WarningDialog';
import { Action } from 'redux';
import { BaseDialogProps } from './DialogContainer';

export interface DialogState {
    dialogType?: DialogTypes;
    dialogProps?: any;
}

export interface DialogOpts {
    dialogType: DialogTypes;
    dialogProps: any;
}

export interface DialogActionPayload {
    payload: DialogOpts;
}

export type DialogReducerAction = Action & DialogActionPayload;

export enum DialogActionTypes {
    SHOW_DIALOG = 'SHOW_DIALOG',
    HIDE_DIALOG = 'HIDE_DIALOG',
}

export enum DialogTypes {
    SUCCESS_DIALOG = 'SUCCESS_DIALOG',
    WARNING_DIALOG = 'WARNING_DIALOG',
}

export const getDialogComponent = (
    dialogType: DialogTypes,
): React.ElementType<BaseDialogProps> => {
    return {
        [DialogTypes.SUCCESS_DIALOG]: SuccessDialog,
        [DialogTypes.WARNING_DIALOG]: WarningDialog,
    }[dialogType];
};

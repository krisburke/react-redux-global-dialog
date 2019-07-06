import React from 'react';
import { Dialog, Classes } from '@blueprintjs/core';
import { BaseDialogProps } from './DialogContainer';

export const WarningDialog: React.ElementType<BaseDialogProps> = ({
    hideDialog,
    dialog: { dialogProps },
}) => {
    const message = dialogProps && dialogProps.message;

    return (
        <Dialog
            isOpen={true}
            isCloseButtonShown={true}
            canEscapeKeyClose={true}
            canOutsideClickClose={true}
            onClose={hideDialog}
            style={{ backgroundColor: '#FFB366' }}
            title="Warning"
        >
            <div className={Classes.DIALOG_BODY}>
                <h1>Yikes!</h1>
                <p>You've opened another dialog.</p>
                <p>{message}</p>
            </div>
        </Dialog>
    );
};

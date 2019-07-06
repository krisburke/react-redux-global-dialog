import React from 'react';
import { Dialog, Classes } from '@blueprintjs/core';
import { BaseDialogProps } from './DialogContainer';

export const SuccessDialog: React.ElementType<BaseDialogProps> = ({
    hideDialog,
}) => {
    return (
        <Dialog
            isOpen={true}
            isCloseButtonShown={true}
            canEscapeKeyClose={true}
            canOutsideClickClose={true}
            onClose={hideDialog}
            style={{ backgroundColor: '#3DCC91' }}
            title="Success"
        >
            <div className={Classes.DIALOG_BODY}>
                <h1>Hello!</h1>
                <p>Here's a dialog.</p>
            </div>
        </Dialog>
    );
};

import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Button, Intent } from '@blueprintjs/core';
import DialogContainer from '../dialog/DialogContainer';
import { DialogOpts, DialogTypes } from '../dialog/dialogTypes';
import * as dialogActions from '../dialog/dialogActions';

const StyledApp = styled.div`
    display: flex;
    justify-content: center;
`;

const App: React.ElementType = ({ showDialog }: DispatchProps) => {
    const handleShowSuccessDialog = (): void => {
        showDialog({
            dialogType: DialogTypes.SUCCESS_DIALOG,
            dialogProps: {},
        });
    };

    const handleShowWarningDialog = (): void => {
        showDialog({
            dialogType: DialogTypes.WARNING_DIALOG,
            dialogProps: {
                message: 'Note: you can pass in dialogProps to the dialog.',
            },
        });
    };

    return (
        <StyledApp>
            <div>
                <h1>Let's open a dialog.</h1>
                <Button
                    type="button"
                    intent={Intent.SUCCESS}
                    text="Open Success Dialog"
                    onClick={handleShowSuccessDialog}
                />
                <Button
                    type="button"
                    intent={Intent.WARNING}
                    text="Open Warning Dialog"
                    onClick={handleShowWarningDialog}
                />
            </div>
            <DialogContainer />
        </StyledApp>
    );
};

interface DispatchProps {
    showDialog: typeof dialogActions.showDialog;
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    showDialog: (dialogOpts: DialogOpts) =>
        dispatch(dialogActions.showDialog(dialogOpts)),
});

export default connect<{}, DispatchProps>(
    null,
    mapDispatchToProps,
)(App);

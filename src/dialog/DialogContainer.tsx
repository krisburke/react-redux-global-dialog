import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ApplicationState } from '../common/rootReducer';
import { DialogState, getDialogComponent } from './dialogTypes';
import * as actions from './dialogActions';

interface StateProps {
    dialog: DialogState;
}

interface DispatchProps {
    hideDialog: typeof actions.hideDialog;
}

export type BaseDialogProps = StateProps & DispatchProps;

const mapStateToProps = ({ dialog }: ApplicationState): StateProps => ({
    dialog,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    hideDialog: () => dispatch(actions.hideDialog()),
});

const BaseDialog = ({ dialog, hideDialog }: BaseDialogProps) => {
    const { dialogType } = dialog;
    if (!dialogType) {
        return null;
    }

    const SpecificDialog: React.ElementType<
        BaseDialogProps
    > = getDialogComponent(dialogType);
    return <SpecificDialog dialog={dialog} hideDialog={hideDialog} />;
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(BaseDialog);

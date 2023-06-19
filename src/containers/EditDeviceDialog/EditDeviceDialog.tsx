import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Trans } from '@lingui/macro';
import { updateDeviceRequest } from '../../modules/devices/actions';
import { connect } from 'react-redux';

interface EditDeviceDialog {
  open: boolean;
  onCancel: () => void;
  onEditDevice: (id: string | number, name: string, description: string) => void;
  currentName: string;
  currentDescription: string | null | undefined;
  id: string | number;
}

const EditDeviceDialog = ({ open, onCancel, onEditDevice, currentName, currentDescription, id }: EditDeviceDialog) => {
  const [nameValue, setNameValue] = useState<string>(currentName);
  const [descriptionValue, setDescriptionValue] = useState<string | null | undefined>(currentDescription);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(event.target.value);
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescriptionValue(event.target.value);
  };

  const handleEditDevice = () => {
    onEditDevice(id, nameValue, descriptionValue ? descriptionValue : '');
    onCancel();
  };

  const handleCancel = () => {
    onCancel();
    setNameValue(currentName);
    setDescriptionValue(currentDescription);
  };

  return (
    <Dialog open={open} onClose={onCancel} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">
        <Trans>Edit device</Trans>
      </DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label={<Trans>Fill in name</Trans>}
          type="text"
          fullWidth
          value={nameValue}
          onChange={handleNameChange}
        />
        <TextField
          value={descriptionValue}
          onChange={handleDescriptionChange}
          margin="dense"
          multiline
          id="name"
          label={<Trans>Fill in description (max. 2000 characters)</Trans>}
          type="text"
          fullWidth
          inputProps={{ maxLength: 2000 }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel} color="primary">
          <Trans>Cancel</Trans>
        </Button>
        <Button
          disabled={(nameValue === currentName && descriptionValue === currentDescription) || nameValue === ''}
          onClick={handleEditDevice}
          color="primary"
        >
          <Trans>Edit</Trans>
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const mapDispatchToProps = {
  onEditDevice: updateDeviceRequest,
};

export default connect(null, mapDispatchToProps)(EditDeviceDialog);

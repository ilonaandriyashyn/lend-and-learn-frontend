import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Trans } from '@lingui/macro';
import { createDeviceRequest } from '../../modules/devices/actions';
import { connect } from 'react-redux';

interface CreateDeviceDialog {
  open: boolean;
  onCancel: () => void;
  onCreateDevice: (name: string, description: string) => void;
}

const CreateDeviceDialog = ({ open, onCancel, onCreateDevice }: CreateDeviceDialog) => {
  const [nameValue, setNameValue] = useState<string>('');
  const [descriptionValue, setDescriptionValue] = useState<string>('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(event.target.value);
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescriptionValue(event.target.value);
  };

  const handleCreateDevice = () => {
    onCreateDevice(nameValue, descriptionValue);
    onCancel();
  };

  return (
    <Dialog open={open} onClose={onCancel} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">
        <Trans>Create device</Trans>
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
        <Button onClick={onCancel} color="primary">
          <Trans>Cancel</Trans>
        </Button>
        <Button disabled={nameValue === ''} onClick={handleCreateDevice} color="primary">
          <Trans>Create</Trans>
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const mapDispatchToProps = {
  onCreateDevice: createDeviceRequest,
};

export default connect(null, mapDispatchToProps)(CreateDeviceDialog);

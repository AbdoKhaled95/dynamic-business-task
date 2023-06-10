import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Box, CircularProgress } from "@mui/material";
import tableBtnsStyle from "../../assets/styles/tableBtnsStyle";
import { useMainContext } from "../../context/MainContext";
import deleteContact from "../../apis/contacts/deleteContact";

// Define dialog styles using the `styled` function from MUI
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

// Define a custom dialog title component
function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

// Define the ConfirmDialog component
const ConfirmDialog = ({ currentContactItem }) => {
  const { currentContact, setCurrentContact, navigateTo } = useMainContext();

  // Define state variables for dialog open status and loading status
  const [open, setOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  // Open the dialog and update the current contact when the delete button is clicked
  const handleClickOpen = () => {
    setOpen(true);
    setCurrentContact(currentContactItem);
  };

  // Close the dialog and reset the current contact when the dialog is closed
  const handleClose = () => {
    setOpen(false);
    setCurrentContact({});
  };

  return (
    <Box>
      {/* Render the delete button */}
      <Button
        color="error"
        sx={tableBtnsStyle}
        variant="outlined"
        onClick={handleClickOpen}
      >
        Delete
      </Button>
      {/* Render the dialog */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        {/* Render the dialog title */}
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          <Typography sx={{ fontSize: "24px", minWidth: 500 }}>
            Do you want to delete this contact?
          </Typography>
        </BootstrapDialogTitle>
        {/* Render the dialog content */}
        <DialogContent dividers>
          <Typography sx={{ fontSize: 18 }}>
            <strong>Name:</strong> {currentContact?.first_name}{" "}
            {currentContact?.last_name}
          </Typography>
          <Typography sx={{ fontSize: 18 }}>
            <strong>Email:</strong> {currentContact?.email}
          </Typography>
          <Typography sx={{ fontSize: 18 }}>
            <strong>Phone:</strong> {currentContact?.phone}
          </Typography>
        </DialogContent>
        {/* Render the dialog actions */}
        <DialogActions>
          {/* Render the "No" button */}
          <Button
            sx={{ width: "100px", height: "35px", fontSize: 16, mx: "12px" }}
            autoFocus
            onClick={handleClose}
            variant="outlined"
          >
            No
          </Button>
          {/* Render the "Delete" button */}
          {isLoading ? (
            <CircularProgress />
          ) : (
            <Button
              sx={{ width: "100px", height: "35px", fontSize: 16 }}
              variant="outlined"
              color="error"
              autoFocus
              onClick={() =>
                deleteContact(
                  currentContact?.id,
                  setIsLoading,
                  handleClose,
                  navigateTo
                )
              }
            >
              Delete
            </Button>
          )}
        </DialogActions>
      </BootstrapDialog>
    </Box>
  );
};

export default ConfirmDialog;

import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { IconButton } from "@mui/material";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { DateRangePickerBasic } from "../UI/Datepicker";

interface DialogSlide {
  setAdvancedSearch: Function;
  setSearchClicked: Function;
  setStartDate: Function;
  setEndDate: Function;
  setSimpleWord: Function;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const DialogSlide = ({
  setAdvancedSearch,
  setSearchClicked,
  setStartDate,
  setEndDate,
  setSimpleWord,
}: DialogSlide) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    setSearchClicked(false);
  };
  const handleClose = () => {
    setOpen(false);
    setSearchClicked(false);
  };
  const handleSearch = () => {
    setOpen(false);
    setSearchClicked(true);
  };

  return (
    <div>
      <IconButton sx={{ p: "10px" }} aria-label="menu" onClick={handleOpen}>
        <DateRangeIcon />
      </IconButton>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        fullWidth={true}
        aria-describedby="alert-dialog-slide-description"
      >
        <h2 style={{ marginBottom: "12px", marginLeft: "24px" }}>
          Advanced Search
        </h2>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <DateRangePickerBasic
              setAdvancedSearch={setAdvancedSearch}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
              setSimpleWord={setSimpleWord}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSearch}>Search</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

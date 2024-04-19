import * as React from "react";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material";
import { Tooltip, tooltipClasses } from "@mui/material";
import WarningIcon from "@mui/icons-material/Warning";

const BounceEmailTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.white,
    top: "-6px !important",
    height: "14px",
    width: "50px",
    position: "absolute", // Adjust the positioning of the arrow here
    left: "calc(0% - 70px) !important", // Adjust the positioning of the arrow here
  },
  [`& .${tooltipClasses.arrow}::before`]: {
    width: "45%",
    boxShadow: "0px 0px 10px 0px #0000004D !important",
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "#000",
    boxShadow: "0px 0px 10px 0px #0000004D",
    minWidth: "180px",
    borderRadius: "6px",
    position: "absolute",
    left: "-30px",
  },
}));

export default function ControlledTooltips() {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handlebutton = (e) => {
    handleClose();
    e.stopPropagation();
  };

  return (
    <BounceEmailTooltip
      open={open}
      onClose={handleClose}
      onOpen={handleOpen}
      title={
        <Box p={2}>
          <Grid container justifyContent="start" alignItems="center">
            <Grid item mr={1}>
              <WarningIcon color="error" />
            </Grid>
            <Grid item mr={0}>
              <Typography
                color="error"
                variant="h6"
                fontSize="14px"
                fontWeight={"bold"}
              >
                Invoice Not Sent
              </Typography>
            </Grid>
          </Grid>
          <Grid mt={1}>
            <Divider sx={{ borderBottom: "2px solid #e9eaef" }} />
          </Grid>
          <Grid mt={2} mb={3}>
            <Typography variant="body1" fontSize="9px" color={"#9d9d9d"}>
              There was an issue delivering this Invoice. Please check the
              email:
            </Typography>
          </Grid>
          <Grid>
            <Button
              onClick={handlebutton}
              sx={{
                borderRadius: "6px",
                padding: "8px 12px",
              }}
              variant="outlined"
              color="error"
            >
              <Typography fontSize={12} textTransform="none">
                Mark as read
              </Typography>
            </Button>
          </Grid>
        </Box>
      }
    >
      <span style={{ cursor: "pointer", position: "relative" }}>!</span>
    </BounceEmailTooltip>
  );
}

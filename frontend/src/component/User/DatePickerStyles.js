import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiPickersCalendarHeader-iconButton": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.red,
    },
    "& .MuiPickersDay-daySelected": {
      backgroundColor: "#4caf50", // Green color
      color: theme.palette.common.red,
      "&:hover": {
        backgroundColor: "#388e3c", // Darker shade of green on hover
      },
    },
  },
}));

export default useStyles;

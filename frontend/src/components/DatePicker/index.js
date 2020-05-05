import React from "react";
import PropTypes from "prop-types";
import MomentUtils from "@date-io/moment";

import palette from "constants/palette";

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import makeStyles from "@material-ui/styles/makeStyles";

const styles = makeStyles({
  datePiker: {
    "& input": {
      color: (props) => palette[props.color] || palette["primary"],
    },
    "& svg": {
      color: (props) => palette[props.color] || palette["primary"],
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": { border: "none" },
    "& .MuiInput-underline": {
      "&::hover": {
        border: "none",
      },
      "&::before": {
        border: "none",
      },
      "&::after": {
        borderColor: (props) => palette[props.color] || palette["primary"],
      },
    },
  },
});

const DatePicker = ({
  color,
  error,
  "data-testid": dataTestid,
  value,
  ...rest
}) => {
  const classes = styles({ color });

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <KeyboardDatePicker
        fullWidth
        disablePast
        size="small"
        error={error}
        format="DD/MM/yyyy"
        inputVariant="outlined"
        invalidDateMessage="Choose a valid date by clicking on the icon"
        className={classes.datePiker}
        inputProps={{
          className: classes.color,
          "data-testid": dataTestid,
          error: String(error),
          disabled: true,
          value: value || "",
        }}
        {...rest}
      />
    </MuiPickersUtilsProvider>
  );
};

DatePicker.propTypes = {
  props: PropTypes.shape({
    value: PropTypes.string,
    color: PropTypes.string,
  }),
};

DatePicker.defaultProps = {
  value: "",
  color: "primary",
};

export default DatePicker;

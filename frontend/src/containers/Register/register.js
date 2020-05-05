import React from "react";
import PropTypes from "prop-types";
import { isEmail } from "validator";

import { connect } from "react-redux";
import { eventPostRequest } from "redux/actions/eventAction";
import { notificationSetMessage } from "redux/actions/notificationAction";

import Card from "components/Card";
import Button from "components/inputs/Button";
import TextField from "components/inputs/TextField";
import DatePicker from "components/DatePicker";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import makeStyles from "@material-ui/styles/makeStyles";

import palette from "constants/palette";

const styles = makeStyles({
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  calendar: {
    color: palette["secondary"],
  },
  button: { justifyContent: "flex-end" },
});

function Register({ loading, eventPostRequest, notificationSetMessage }) {
  const classes = styles();
  const [name, setName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [eventDate, setEventDate] = React.useState("");
  const [error, setError] = React.useState(false);

  const handleRegister = () => {
    if (!name || !lastName || !isEmail(email) || !eventDate._isValid) {
      notificationSetMessage(
        "One or more fields are invalid or missing",
        "error"
      );
      setError(true);
      return;
    }

    setError(false);
    return eventPostRequest({
      name,
      lastName,
      email,
      eventDate: eventDate.format(),
    });
  };

  return (
    <Card data-testid="register-card" colored className={classes.content}>
      <CardContent>
        <Typography color="secondary" variant="h5">
          Register new event
        </Typography>
        <form noValidate autoComplete="off">
          <TextField
            fullWidth
            name="name"
            label="Name"
            error={error}
            value={name}
            color="secondary"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            fullWidth
            name="lastName"
            label="Last name"
            error={error}
            value={lastName}
            color="secondary"
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            fullWidth
            name="email"
            label="Email"
            error={error}
            value={email}
            color="secondary"
            onChange={(e) => setEmail(e.target.value)}
          />
          <DatePicker
            name="eventDate"
            color="secondary"
            error={error}
            value={eventDate && eventDate.format("YYYY-MM-DD")}
            onChange={(e) => setEventDate(e)}
          />
        </form>
      </CardContent>
      <CardActions className={classes.button}>
        <Button
          data-testid="register-btn"
          color="secondary"
          loading={loading}
          disabled={loading}
          onClick={handleRegister}
        >
          Register
        </Button>
      </CardActions>
    </Card>
  );
}

Register.propTypes = {
  loading: PropTypes.bool,
  eventPostRequest: PropTypes.func.isRequired,
  notificationSetMessage: PropTypes.func.isRequired,
};

Register.defaultProps = {
  loading: false,
};

export default connect(({ event }) => ({ loading: event.loading }), {
  eventPostRequest,
  notificationSetMessage,
})(Register);

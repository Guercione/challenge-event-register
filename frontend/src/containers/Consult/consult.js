import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { eventGetByHashRequest } from "redux/actions/eventAction";
import { notificationSetMessage } from "redux/actions/notificationAction";

import Card from "components/Card";
import Button from "components/inputs/Button";
import TextField from "components/inputs/TextField";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import makeStyles from "@material-ui/styles/makeStyles";

const styles = makeStyles({
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    width: "70%",
  },
});

function Consult({ loading, eventGetByHashRequest, notificationSetMessage }) {
  const classes = styles();
  const [hash, setHash] = React.useState("");
  const [error, setError] = React.useState(false);

  const handledConsult = () => {
    if (hash && hash.length === 6) {
      setError(false);
      return eventGetByHashRequest(hash);
    }

    setError(true);
    notificationSetMessage("Invalid code", "error");
  };

  return (
    <Card data-testid="consult-card" className={classes.card}>
      <CardContent className={classes.content}>
        <Typography color="primary" align="center" variant="h5">
          Consult your event
        </Typography>
        <form noValidate autoComplete="off">
          <TextField
            fullWidth
            name="hash"
            label="Event code"
            value={hash}
            error={error}
            data-testid="consult-input-hash"
            onChange={(e) => setHash(e.target.value)}
          />
        </form>
      </CardContent>
      <CardActions>
        <Button
          data-testid="consult-btn"
          loading={loading}
          onClick={handledConsult}
        >
          Consult
        </Button>
      </CardActions>
    </Card>
  );
}

Consult.propTypes = {
  loading: PropTypes.bool,
  eventGetByHashRequest: PropTypes.func.isRequired,
  notificationSetMessage: PropTypes.func.isRequired,
};

Consult.defaultProps = {
  loading: false,
};

export default connect(({ event }) => ({ loading: event.loading }), {
  eventGetByHashRequest,
  notificationSetMessage,
})(Consult);

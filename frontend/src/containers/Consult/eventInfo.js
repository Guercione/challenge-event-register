import React from "react";
import moment from "moment";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { eventDeleteRequest, eventClearData } from "redux/actions/eventAction";

import Card from "components/Card";
import Grid from "@material-ui/core/Grid";
import Button from "components/inputs/Button";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import makeStyles from "@material-ui/styles/makeStyles";

const styles = makeStyles({
  content: { height: "85%" },
  subtitle: { marginRight: 5 },
});

function EventInfo({
  loading,
  eventHash,
  name,
  lastName,
  email,
  eventDate,
  eventCreatedDate,
  eventDeleteRequest,
  eventClearData,
}) {
  const classes = styles();

  return (
    <Card data-testid="eventInfo-card">
      <CardContent className={classes.content}>
        <Typography color="primary" variant="h5">
          Event information
        </Typography>
        <Grid container alignItems="center">
          <Typography
            color="primary"
            variant="subtitle1"
            className={classes.subtitle}
          >
            Name:
          </Typography>
          <Typography variant="body1">{` ${name} ${lastName}`}</Typography>
        </Grid>
        <Grid container alignItems="center">
          <Typography
            color="primary"
            variant="subtitle1"
            className={classes.subtitle}
          >
            Email:
          </Typography>
          <Typography variant="body1">{email}</Typography>
        </Grid>
        <Grid container alignItems="center">
          <Typography
            color="primary"
            variant="subtitle1"
            className={classes.subtitle}
          >
            Event date:
          </Typography>
          <Typography variant="body1">
            {moment(eventDate).format("MMM Do YYYY")}
          </Typography>
        </Grid>
        <Grid container alignItems="center">
          <Typography
            color="primary"
            variant="subtitle1"
            className={classes.subtitle}
          >
            Event created at:
          </Typography>
          <Typography variant="body1">
            {moment(eventCreatedDate).format("MMM Do YYYY")}
          </Typography>
        </Grid>
      </CardContent>
      <CardActions>
        <Grid container justify="space-between">
          <Button
            data-testid="eventInfo-btn-new"
            color="primary"
            loading={loading}
            onClick={() => eventClearData()}
          >
            New
          </Button>
          <Button
            data-testid="eventInfo-btn-delete"
            color="error"
            loading={loading}
            onClick={() => eventDeleteRequest(eventHash)}
          >
            Delete
          </Button>
        </Grid>
      </CardActions>
    </Card>
  );
}

EventInfo.propTypes = {
  loading: PropTypes.bool,
  eventHash: PropTypes.string,
  name: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  eventDate: PropTypes.string,
  eventCreatedDate: PropTypes.string,
  eventDeleteRequest: PropTypes.func.isRequired,
  eventClearData: PropTypes.func.isRequired,
};

EventInfo.defaultProps = {
  loading: false,
  eventHash: "",
  name: "",
  lastName: "",
  email: "",
  eventDate: "",
  eventCreatedDate: "",
};

export default connect(({ event }) => ({ ...event }), {
  eventDeleteRequest,
  eventClearData,
})(EventInfo);

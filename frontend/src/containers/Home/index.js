import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Consult from "../Consult/consult";
import EventInfo from "../Consult/eventInfo";
import Register from "../Register/register";
import Successfully from "../Register/successfully";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/styles/makeStyles";

const styles = makeStyles({
  container: {
    height: "100vh",
  },
});

function Home({ eventId, eventHash }) {
  const classes = styles();

  return (
    <Container maxWidth="md">
      <Grid container className={classes.container} alignItems="center">
        <Grid container justify="center" item xs={12} sm={6}>
          {eventHash ? <EventInfo /> : <Consult />}
        </Grid>
        <Grid container justify="center" item xs={12} sm={6}>
          {!eventId && eventHash ? <Successfully /> : <Register />}
        </Grid>
      </Grid>
    </Container>
  );
}

Home.propTypes = {
  eventId: PropTypes.string,
  eventHash: PropTypes.string,
};

Home.defaultProps = {
  eventId: "",
  eventHash: "",
};

export default connect(
  ({ event }) => ({ eventId: event.eventId, eventHash: event.eventHash }),
  {}
)(Home);

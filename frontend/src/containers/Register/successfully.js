import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { CopyToClipboard } from "react-copy-to-clipboard/";

import palette from "constants/palette";

import Card from "components/Card";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import makeStyles from "@material-ui/styles/makeStyles";
import CopyIcon from "@material-ui/icons/FileCopyOutlined";
import WarningIcon from "@material-ui/icons/ReportProblemOutlined";

const styles = makeStyles({
  content: { height: "100%" },
  hashCodeContent: {
    height: "85%",
  },
  hashCode: { height: "100%" },
  highlightText: {
    color: palette["highlight"],
  },
});

function Successfully({ eventHash }) {
  const classes = styles();

  return (
    <Card data-testid="successfully-card" colored>
      <CardContent className={classes.content}>
        <Grid item xs={12} className={classes.hashCodeContent}>
          <Grid
            container
            justify="center"
            alignContent="center"
            className={classes.hashCode}
          >
            <Typography align="center" color="secondary" variant="h4">
              Your event code
            </Typography>
            <Grid container justify="center" alignItems="center">
              <Typography
                align="center"
                variant="h5"
                className={classes.highlightText}
              >
                {eventHash || "1b23hg4"}
              </Typography>
              <Tooltip title="Copy to clipboard">
                <CopyToClipboard text={eventHash}>
                  <IconButton>
                    <CopyIcon color="secondary" aria-label="copy-clipboard" />
                  </IconButton>
                </CopyToClipboard>
              </Tooltip>
            </Grid>
          </Grid>
        </Grid>
        <Grid container direction="column" justify="center" alignItems="center">
          <WarningIcon color="secondary" aria-label="copy-clipboard" />
          <Typography color="secondary" align="center" variant="subtitle2">
            Save this code to future consults and event canceling
          </Typography>
        </Grid>
      </CardContent>
    </Card>
  );
}

Successfully.propTypes = {
  eventHash: PropTypes.string,
};

Successfully.defaultProps = {
  eventHash: "-",
};

export default connect(
  ({ event }) => ({ eventHash: event.eventHash }),
  {}
)(Successfully);

import React from "react";
import PropTypes from "prop-types";

import palette from "constants/palette";

import MuiCard from "@material-ui/core/Card";
import makeStyles from "@material-ui/styles/makeStyles";

const styles = makeStyles({
  card: {
    margin: "10px 0",
    minHeight: 330,
    width: 400,
    padding: 15,
    "& .MuiCardContent-root": {
      padding: 0,
    },
    "& .MuiCardActions-root": {
      padding: 0,
    },
  },
  coloredCard: {
    background: `linear-gradient(45deg, ${palette["primary"]} 0%, rgba(119,95,209,1) 51%, rgba(156,144,203,1) 100%)`,
  },
});

function Card({ children, colored, className, ...rest }) {
  const classes = styles();

  return (
    <MuiCard
      className={
        colored
          ? [classes.card, classes.coloredCard, className].join(" ")
          : [classes.card, className].join(" ")
      }
      {...rest}
    >
      {children}
    </MuiCard>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  colored: PropTypes.bool,
  className: PropTypes.string,
};

Card.defaultProps = {
  colored: false,
  className: "",
};

export default Card;

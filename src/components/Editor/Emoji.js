import React from "react";
import PropTypes from "prop-types";


const Emoji = ({ onPicked }) => {
  return (
    <div>Emoji</div>
  );
};

Emoji.propTypes = {
  addEmoji: PropTypes.func.isRequired
};

export default Emoji;

import React from "react"
import propTypes from "prop-types"

const Stats = ({label, percentage}) => (
    <>
        <span class="label">{label}</span>
        <span class="percentage">{percentage}</span>
    </>)


Stats.propTypes = {
  label: propTypes.string.isRequired,
  percentage: propTypes.number.isRequired,
};

export default Stats;
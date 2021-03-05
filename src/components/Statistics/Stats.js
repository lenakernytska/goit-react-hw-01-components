import React from "react"
import propTypes from "prop-types"
import styles from './Stats.module.css';

const Stats = ({label, percentage}) => (
    <>
    <span className={styles.label}>{label}</span>
    <span className={styles.percentage}>{percentage}%</span>
    </>)


Stats.propTypes = {
  label: propTypes.string.isRequired,
  percentage: propTypes.number.isRequired,
};

export default Stats;
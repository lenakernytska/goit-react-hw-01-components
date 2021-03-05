import React from "react";
import propTypes from "prop-types";
import StatisticList from "./StatisticList";
import styles from './Statistics.module.css';



const Statistics = ({ stats, title }) => (
    <section className={styles.statistics}>
        <h2 className={styles.title}>{title}</h2>
        <StatisticList stats={stats} />
 
    </section>
);

Statistics.defaultProps = {
    title: ""
};


Statistics.propTypes = {
    title: propTypes.string,
    stats: propTypes.arrayOf(propTypes.shape()).isRequired,
};
 
export default Statistics;
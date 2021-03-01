import React from "react";
import propTypes from "prop-types";
import StatisticList from "./StatisticList";


const Statistics = ({ stats, title }) => (
    <section class="statistics">
        <h2 class="title">{title}</h2>
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
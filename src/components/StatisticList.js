import React from "react"
import propTypes from "prop-types";
import Stats from "./Stats"



const StatisticList = ({ stats }) =>
(<ul class="stat-list">
    {stats.map(({ id, label, percentage }) =>
    (<li key={id} class="item">
        <Stats label={label}
            percentage={percentage} />
    </li>)
    )}
        
</ul>);

StatisticList.propTypes = {
    stats: propTypes.arrayOf(propTypes.shape({
        id: propTypes.string.isRequired
    })).isRequired
};

  
export default StatisticList;
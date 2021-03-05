import React from "react"
import propTypes from "prop-types";
import Stats from "./Stats"
import styles from './StatisticList.module.css';


const generateItemColor = (min, max) => {
  const itemColor = `rgb(
      ${Math.random() * (max - min) + min},
      ${Math.random() * (max - min) + min},
      ${Math.random() * (max - min) + min}
  )`;

  return itemColor;
};

const StatisticList = ({ stats }) =>
(<ul className={styles.statlist}>
    {stats.map(({ id, label, percentage }) =>
    (<li key={id}
        className={styles.item}
        style={{ backgroundColor: generateItemColor(0, 255) }}>
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
import React, {useState} from 'react'
import {FaAngleDown} from 'react-icons/fa'
import styles from '../../css/day.module.css'
import PropTypes from 'prop-types'

const Day = (props) => {
    const [showInfo, setInfo] = useState(false);
    const toggleInfo = () => {
        setInfo(showInfo=>!showInfo)
    }
    return (
        <article className={styles.day}>
            <h4>
            {props.day}
                <button
                className={styles.btn}
                onClick={toggleInfo}
                >
                    <FaAngleDown/>
                </button>
            </h4>
            {showInfo && <p>{props.info}</p>}
        </article>
    )
}

export default Day

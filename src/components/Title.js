import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Title = (props) => {
    return (
        <div className={props.className}>
            <h4>
                <span className="title">{props.title}</span>
                <span>{props.subtitle}</span>
            </h4>
        </div>
    )
}

export default styled(Title)`
    text-transform: uppercase;
    font-size: 2.3rem;
    margin-bottom: 2rem;
    h4 {
        text-align: center;
        letter-spacing: 7px;
        color: var(--primaryColor);
    }
    .title{
        color: var(--mainBlack);
    }
    span{
        display: block;
    }
    @media (min-width 576px) {
        span {
            display: inline-block;
            margin: 0 0.35rem;
        }
    }
`

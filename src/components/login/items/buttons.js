import React from 'react'
import PropTypes from 'prop-types'

export const Button = ({
                           rounded = false,
                           outlined = false,
                           flat = false,
                           raised = false,
                           icon = false,
                           size = 'default',
                           color,
                           children,
                           props
                       }) => {
    let css = []
    css.push(color)
    if (rounded) css.push('btn-rounded')
    if (raised) css.push('btn-raised')
    if (icon) css.push('btn-icon')
    if (flat) {
        return (
            <button
                className={`btn btn-default bg-blue-500 hover:bg-blue-600 text-white btn-rounded`}
                {...props}>
                {children}
            </button>
        )
    }
    if (outlined) {
        return (
            <button
                className={`btn btn-${size} btn-outlined btn-outlined-${color} ${css.join(
                    ' '
                )}`}
                {...props}>
                {children}
            </button>
        )
    }
    return (
        <button
            className={`btn btn-${size} btn-${color} ${css.join(' ')}`}
            {...props}>
            {children}
        </button>
    )
}

Button.propTypes = {
    size: PropTypes.oneOf(['sm', 'default', 'lg']),
    rounded: PropTypes.bool,
    outlined: PropTypes.bool,
    flat: PropTypes.bool,
    icon: PropTypes.bool,
    raised: PropTypes.bool,
    color: PropTypes.string,
    children: PropTypes.any,
}

export const CircularButton = ({
                                   size = 'default',
                                   color = 'blue',
                                   outlined = false,
                                   flat = false,
                                   raised = false,
                                   children,
                                   props
                               }) => {
    let css = []
    if (raised) css.push('btn-raised')
    if (flat) {
        return (
            <button
                className={`btn btn-circle btn-circle-${size} btn-flat btn-flat-${color} ${css.join(
                    ' '
                )}`}
                {...props}>
                {children}
            </button>
        )
    }
    if (outlined) {
        return (
            <button
                className={`btn btn-circle btn-circle-${size} btn-outlined btn-outlined-${color} ${css.join(
                    ' '
                )}`}
                {...props}>
                {children}
            </button>
        )
    }
    return (
        <button
            className={`btn btn-circle btn-circle-${size} btn-${color} ${css.join(
                ' '
            )}`}
            {...props}>
            {children}
        </button>
    )
}

CircularButton.propTypes = {
    size: PropTypes.oneOf(['sm', 'default', 'lg']),
    flat: PropTypes.bool,
    raised: PropTypes.bool,
    color: PropTypes.string,
    children: PropTypes.any,
}

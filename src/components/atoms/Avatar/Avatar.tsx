import React from 'react'
import { UserType } from '../../../types'
import './style.scss'

interface Props extends UserType { }

const Avatar = (props: Props) => {
    return (
        <div className='avatar'>{props.name[0].toUpperCase()}</div>
    )
}

export default Avatar
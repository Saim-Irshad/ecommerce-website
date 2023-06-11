"use client"
import React, { FC  } from 'react'

import {IconType} from "React-icons"

interface ButtonProps{
    label:string
    onClick:(e:React.MouseEvent<HTMLButtonElement>)=>void
    outline?:boolean
    small?:boolean
    disabled?:boolean
    icon?:IconType
    px?:number
    py?:number
}

const Button3:React.FC<ButtonProps> = ({
    label,
    onClick,
    outline,
    small,
    px,
    py,
    disabled,
    icon:Icon
}) => {
    return(
        <button onClick={onClick} disabled = {disabled}
        className=
        {`
            relative
            rounded-lg
            transition
            items-center justify-between
            text-center
            w-full
            disabled:opacity-70
            disabled:cursor-not-allowed
            ${outline?`bg-white`:`bg-rose-500`}
            ${outline?`text-black`:`text-white`}
            ${outline?`border-2 border-black`:`border-2 bg-rose-500`}
            ${outline?`hover:bg-black hover:text-white`:`hover:opacity-70`}
            ${small?`px-4`:`px-6`}
            ${small?`py-3`:`py-3`}
            ${small?`text-sm`:`text-xl`}
            
        `}>
            {label}
            {Icon && (
                <Icon size={24} className='absolute left-3 top-4 items-center justify-between '/>
            )}
        </button>
    )
}

export default Button3
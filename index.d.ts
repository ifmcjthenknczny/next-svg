import React from 'react'

type Props = {
    name: string
    subdirectory?: string
    className?: string
    color?: string
    width?: number
    height?: number
}

declare const Svg: React.FC<Props>

export default Svg

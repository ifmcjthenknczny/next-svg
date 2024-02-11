import React from 'react'
import dynamic from 'next/dynamic'

type Props = {
    name: string
    subdirectory?: string
    className?: string
    color?: string
    width?: number
    height?: number
}

const BASE_DIR = '/public/svg/'

const getFillColor = (color?: string): string => color || 'currentColor'

const normalizeSubdirectory = (subdirectory?: string): string => {
	if (!subdirectory) {
		return ''
	}
	const newSubDirectory = subdirectory.startsWith('/') ? subdirectory.slice(1) : subdirectory

	return newSubDirectory.endsWith('/') ? newSubDirectory : `${newSubDirectory}/`
}

const normalizeName = (name: string): string => name.replace('.svg','')

const assembleDirectory = (name: string, subdirectory?: string) => `${BASE_DIR}${normalizeSubdirectory(subdirectory)}${normalizeName(name)}.svg`

const Svg = ({ name, subdirectory, className, color, width, height }: Props) => {
	const svgDirectory = assembleDirectory(name, subdirectory)

	const SvgImage = (dynamic(() =>
		import(svgDirectory))) as React.FC<React.SVGProps<SVGSVGElement>>

	const divStyle = color || width || height ? {
		...(color && { color }),
		...(width && { width }),
		...(width && { maxWidth: width }),
		...(width && { minWidth: width }),
		...(height && { height }),
		...(height && { maxHeight: height }),
		...(height && { minHeight: height })
	} : undefined

	return (
		<div className={className} style={divStyle}>
			<SvgImage fill={getFillColor(color)} />
		</div>
	)
}

export default Svg
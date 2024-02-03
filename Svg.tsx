import React from 'react';
import classNames from 'classnames';
import dynamic from 'next/dynamic';
import svgs from './svgs';
import {useTheme} from 'next-themes';

export type IconName = keyof typeof svgs

type Props = {
    name: IconName
    size?: string | number
    className?: string
    color?: string | [string, string]
    // [lightmode, darkmode]
}

function getFillColor(theme?: string, color?: string | [string, string] | undefined): string {
    if (!color) {
        return 'currentColor';
    }
    if (!Array.isArray(color) || !theme) {
        return color as string;
    }
    return theme === 'dark' ? color[1] : color[0];
}

export default function Icon({name, size, className, color}: Props) {
    const {theme} = useTheme();
    const SvgIcon = (dynamic(() =>
        import(`/public/icons/${svgs[name]}.svg`))) as React.FC<React.SVGProps<SVGSVGElement>>;

    return (
        <div className={classNames(className, size && `w-${size} h-${size} max-w-${size} max-h-${size}`, color && color.length === 1 && `text-${color}`, color && color.length === 2 && `text-${color[0]} dark:text-${color[1]}`)}>
            <SvgIcon fill={getFillColor(theme, color)} />
        </div>
    );
}
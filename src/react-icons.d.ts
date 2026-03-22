// Override react-icons IconType to return JSX.Element for React 19 compatibility
// The upstream type returns ReactNode which now includes `undefined` in React 19,
// making icons unusable as JSX components.
// We patch the actual node_modules .d.ts via postinstall, but this file serves
// as the canonical type override for the project.

import type { SVGAttributes, ReactNode } from "react";

declare module "react-icons/lib/esm/iconBase" {
    export interface IconBaseProps extends SVGAttributes<SVGElement> {
        children?: ReactNode;
        size?: string | number;
        color?: string;
        title?: string;
    }
    export type IconType = (props: IconBaseProps) => React.JSX.Element;
}

declare module "react-icons/lib/iconBase" {
    export interface IconBaseProps extends SVGAttributes<SVGElement> {
        children?: ReactNode;
        size?: string | number;
        color?: string;
        title?: string;
    }
    export type IconType = (props: IconBaseProps) => React.JSX.Element;
}




import { iconTypes } from '../Icon/collection';

export interface DropdownElementProps {
    /**
     * The background color
     */
    backgroundColor?: string;

    /**
     * Static height
     */
    height?: number;

    /**
     * The icon next to the text
     */
    icon?: iconTypes;

    /**
     * The color of the icon
     */
    iconColor?: string;

    /**
     * Icon size
     */
    iconSize?: number;

    /**
     * The dropdown id
     */
    id?: string;

    /**
     * Runs a function when clicked
     */
    onClick?: () => void;

    /**
     * The text
     */
    text?: string;

    /**
     * The color of the text
     */
    textColor?: string;

    /**
     * Text size
     */
    textSize?: number;

    /**
     * Static width
     */
    width?: number;
}

export default DropdownElementProps;

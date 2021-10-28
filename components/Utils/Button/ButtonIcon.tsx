import styles from "./button.module.scss";
import type { CSSProperties } from "react";
import { IconType, SVGIcon } from "components/Utils/SVGIcon";
export * from "components/Utils/SVGIcon";

interface ButtonIconProps {
    label: string;
    icon: IconType;
    style?: CSSProperties;
    active?: boolean;
    disabled?: boolean;
    onClick: () => void;
}

export const ButtonIcon = ({
    label,
    icon,
    onClick,
    active = false,
    disabled = false,
    style,
}: ButtonIconProps) => {
    return (
        <button
            className={styles.container}
            name={label}
            title={label}
            data-active={active}
            disabled={disabled}
            onClick={onClick}
            style={{ ...style }}
        >
            <SVGIcon type={icon} />
        </button>
    );
};

import styled from "@emotion/styled";
import { ButtonHTMLAttributes } from "react";
import { colors } from "utils/themes";
import { ReactComponent as CaretDown } from "assets/icons/Caret--down.svg";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    iconRight?: boolean;
}

function Component({iconRight = false, children, ...props}: Props) {
    return (
        <button {...props} >
            {children}
            {iconRight &&  <CaretDown/>}
        </button>
    )
}




type StyledProps = {
    variant?: "white" | "secondary" | "primary" | "opaque" | "ghost";
    size?: "small" | "medium";
}

const Button = styled(Component, {
    shouldForwardProp: prop => prop !== "variant" && prop !== "size"
})<StyledProps>(({variant = "white", size = "small"}) => ({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: size === "medium" ? "12px" : "8px",
    fontFamily: "'Satoshi', sans-serif",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "150%",
    border: "none",
    cursor: "pointer",
    background: variant === "white" 
        ? colors.white
        : variant === "secondary"
        ? colors.lightGray
        : variant === "primary"
        ? colors.primary
        : variant === "opaque"
        ? "rgba(249, 249, 249, 0.15);"
        : "transparent",
    color: variant === "primary" || variant === "opaque"
        ? colors.white
        : colors.darkPrimary,
    padding: size === "medium"
    ? "16px 32px"
    : "12px 24px",
    "&:hover:not(:active)": {
        background: variant === "white" 
        ? colors.lightGray
        : variant === "secondary"
        ? colors.borderGray
        : variant === "primary"
        ? "#1E193E"
        : variant === "opaque"
        ? "rgba(249, 249, 249, 0.3)"
        : colors.borderGray,
    },
    "&:active": {
        outlineWidth: variant === "primary" ? "1px" : "2px",
        outlineStyle: "solid",
        outlineColor: colors.primary,
    },
    "&:disabled": {
        opacity: "0.5",
        cursor: "not-allowed"
    },
    "& > svg": {
        height: "16px",
        width: "16px",
        "& > path": {
            fill: variant === "primary" || variant === "opaque" ? colors.white : colors.darkPrimary
        }
    }
}))


export default Button;
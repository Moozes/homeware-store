import styled from "@emotion/styled";
import { HTMLProps } from "react";
import { colors } from "utils/themes";

type Props = HTMLProps<HTMLInputElement> & {
    
}

function Component(props: Props) {
    return (
        <input type="text" {...props} />
    )
}




type StyledProps = {
    variant?: "primary" | "opaque"
}

const TextInput = styled(Component, {
    shouldForwardProp: prop => prop !== "variant"
})<StyledProps>(({variant = "primary"}) => ({
    fontFamily: "'Satoshi', sans-serif",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "150%",
    color: variant === "primary" ? colors.darkPrimary : colors.white,
    background: variant === "primary" ? colors.white : "rgba(255, 255, 255, 0.15)",
    padding: "17px 32px",
    border: "none",
    outline: "none",
    "&::placeholder": {
        color: variant === "primary" ? colors.darkPrimary : colors.white,
    }
}))


export default TextInput;
import styled from "@emotion/styled";
import { HTMLProps } from "react";
import { colors } from "utils/themes";

type Props = HTMLProps<HTMLInputElement> & {
    label?: string;
    className?: string
}

function Component({className, label, ...inputProps}: Props) {
    return (
        <span className={className} >
            <input {...inputProps} type="checkbox"  id="checkbox" />
            {label && <label htmlFor="checkbox">{label}</label> }
        </span>
    )
}




type StyledProps = {}

const Checkbox = styled(Component)<StyledProps>(props => ({
    display: "inline-flex",
    alignItems: "center",
    gap: "12px",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "150%",
    "& > input": {
        accentColor: colors.primary,
        height: "16px",
        width: "16px",
        borderColor: "#DCDCDC",
        margin: 0
    }
}))


export default Checkbox;
import styled from "@emotion/styled";
import { HTMLProps, useState } from "react";
import { colors } from "utils/themes";

type Props = HTMLProps<HTMLDivElement>

function Component(props: Props) {
    const [number, setNumber] = useState(0)

    return (
        <div {...props} >
            <span className="minus"  onClick={() => setNumber(prev => Math.max(prev-1, 0))} >-</span>
            <span className="number" >{number}</span>
            <span className="plus"  onClick={() => setNumber(prev => prev+1)}>+</span>
        </div>
    )
}




type StyledProps = {}

const Stepper = styled(Component)<StyledProps>(props => ({
    fontFamily: "'Satoshi', sans-serif",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "150%",
    display: "inline-flex",
    alignItems: "center",
    padding: "12px 16px",
    background: colors.white,
    width: "122px",
    "& > .minus, & > .plus": {
        cursor: "pointer",
        color: colors.borderGray,
        "&::selection": {
            background: "transparent"
        }
    },
    
    "&:hover > .minus, &:hover > .plus, ": {
        color: colors.borderDark,
    },

    "& > .number": {
        flexGrow: 1,
        textAlign: "center",
        color: colors.darkPrimary
    },

}))


export default Stepper;
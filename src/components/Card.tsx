import styled from "@emotion/styled";
import { HTMLProps } from "react";
import { ReactComponent as Delivery } from "assets/icons/Delivery.svg";
import { ReactComponent as Purchase } from "assets/icons/Purchase.svg";
import { ReactComponent as Sprout } from "assets/icons/Sprout.svg";
import { ReactComponent as Checkmark } from "assets/icons/Checkmark--outline.svg";
import { getFontCSS } from "utils/functions";
import { colors } from "utils/themes";

type Props = HTMLProps<HTMLDivElement> & {
    icon: "delivery" | "purchase" | "sprout" | "checkmark";
    title: string;
    text: string;
}

function Component({icon, title, text, ...divProps}: Props) {

    const selectedIcon = icon === "delivery"
        ? <Delivery/>
        : icon === "purchase"
        ? <Purchase/>
        : icon === "sprout"
        ? <Sprout/>
        : <Checkmark/>

    return (
        <div {...divProps} >
            {selectedIcon}
            <div className="title">{title}</div>
            <div className="text">{text}</div>
        </div>
    )
}




type StyledProps = {}

const Card = styled(Component)<StyledProps>(props => ({
    background: colors.lightGray,
    padding: "48px",
    svg: {
      // width: "24px",
      // height: "24px",
      marginBottom: "12px"
    },
    ".title": {
      ...getFontCSS("'Clash Display', sans-serif", 400, 20, 28),
      color: colors.darkPrimary,
      marginBottom: "12px"
    },
    ".text": {
      ...getFontCSS("'Satoshi', sans-serif", 400, 16, 24),
      color: colors.darkPrimary
    },
}))


export default Card;
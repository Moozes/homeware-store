import styled from "@emotion/styled";
import { HTMLProps } from "react";
import { ReactComponent as Delivery } from "assets/icons/Delivery.svg";
import { ReactComponent as Purchase } from "assets/icons/Purchase.svg";
import { ReactComponent as Sprout } from "assets/icons/Sprout.svg";
import { ReactComponent as Checkmark } from "assets/icons/Checkmark--outline.svg";

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

}))


export default Card;
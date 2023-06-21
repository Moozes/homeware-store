import styled from "@emotion/styled";
import { HTMLProps } from "react";
import { getFontCSS } from "utils/functions";
import { colors } from "utils/themes";

type Props = HTMLProps<HTMLDivElement> & {
    imageSrc: string;
    name: string;
    price: string;
}

function Component({imageSrc, name, price, ...divProps}: Props) {
    return (
        <div {...divProps} >
            <img src={imageSrc} alt="" />
            <div className="name">{name}</div>
            <div className="price">£{price}</div>
        </div>
    )
}




type StyledProps = {}

const Product = styled(Component)<StyledProps>(props => ({
    width: "305px",
    img: {
        width: "100%",
        marginBottom: "24px",
    },
    ".name": {
        ...getFontCSS("'Clash Display', sans-serif", 400, 20, 20*1.4),
        color: colors.darkPrimary,
        marginBottom: "8px",
    },
    ".price": {
        ...getFontCSS("'Satoshi', sans-serif", 400, 18, 18*1.5),
        color: colors.darkPrimary
    },
}))


export default Product;
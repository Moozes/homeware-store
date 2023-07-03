import styled from "@emotion/styled";
import { HTMLProps } from "react";
import SingleProduct from "./components/SingleProduct";
import Button from "components/Button";
import { colors } from "utils/themes";
import { getFontCSS } from "utils/functions";

type Props = HTMLProps<HTMLDivElement>

function Component(props: Props) {
    return (
        <div {...props} >
            <div className="cart">
                <SingleProduct className="cart-item" />
                <SingleProduct className="cart-item" />
                <div className="cart-footer">
                    <div className="info-container">
                        <div className="info">Taxes and shipping are calculated at checkout</div>
                        <div className="subtotal">Subtotal</div>
                        <div className="total-price">£210</div>
                    </div>
                    <div className="button-container">
                        <Button variant="primary" size="medium" >Go to checkout</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}




type StyledProps = {}

const ShoppingCart = styled(Component)<StyledProps>(props => ({
    padding: "84px 80px",
    background: colors.lightGray,
    "& > .cart": {
        background: "white",
        padding: "72px 63px 54px",
        "& > .cart-item": {
            marginBottom: "32px"
        },
        "& > .cart-footer": {
            "& > .info-container": {
                color: colors.darkPrimary,
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginBottom: "16px",
                "& > .info": {
                    ...getFontCSS("'Satoshi', sans-serif", 400, 14, 1.5*14),
                    flexGrow: 1
                },
                "& > .subtotal": {
                    ...getFontCSS("'Clash Display', sans-serif", 400, 20, 1.4*20),
                },
                "& > .total-price": {
                    ...getFontCSS("'Clash Display', sans-serif", 400, 24, 1.4*24),       
                },
            },
            "& > .button-container": {
                textAlign: "end"
            },
        }
    }
}))


export default ShoppingCart;

import styled from "@emotion/styled";
import { HTMLProps } from "react";
import ProductDetails from "./components/ProductDetails";
import FeaturedProducts from "components/FeaturedProducts";
import CardsSection from "components/CardsSection";
import NewsLetter from "components/NewsLetter";
import { getFontCSS, mq } from "utils/functions";
import { colors } from "utils/themes";

type Props = HTMLProps<HTMLDivElement>

function Component(props: Props) {
    return (
        <div {...props} >
            <ProductDetails className="product-details" />
            <div className="container">
                <div className="title">You might also like</div>
                <FeaturedProducts/>
                <CardsSection/>
            </div>
            <NewsLetter/>
        </div>
    )
}




type StyledProps = {}

const SingleProduct = styled(Component)<StyledProps>(props => ({
    "& > .product-details": {
        marginBottom: "50px"
    },
    "& > .container": {
        padding: "0 80px",
        "& > .title": {
            ...getFontCSS("'Clash Display', sans-serif", 400, 32, 1.2*32),
            color: colors.darkPrimary
        }
    },
    
    [mq(680)]: {
        "& > .container": {
            padding: "0 24px",
            "& > .title": {
                fontSize: "20px"
            }
        },
    }
}))


export default SingleProduct;
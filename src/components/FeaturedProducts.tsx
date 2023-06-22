import styled from "@emotion/styled";
import { HTMLProps } from "react";
import Product from "./Product";
import chairImage from "assets/images/chair.png";
import image from "assets/images/hero.jpeg"
import Button from "./Button";
import { mq } from "utils/functions";


type Props = HTMLProps<HTMLDivElement>

function Component(props: Props) {
    return (
        <div {...props} >
            <div className="products">
                <div className="product-group">
                    <Product className="product" imageSrc={chairImage} name="The Dandy chair" price="250"/>
                    <Product className="product" imageSrc={chairImage} name="The Dandy chair" price="250"/>
                </div>
                <div className="product-group">
                    <Product className="product" imageSrc={chairImage} name="The Dandy chair" price="250"/>
                    <Product className="product" imageSrc={chairImage} name="The Dandy chair" price="250"/>
                </div>
            </div>
                <div className="button">
                    <Button  variant="secondary" >View collection</Button>
                </div>
        </div>
    )
}




type StyledProps = {}

const FeaturedProducts = styled(Component)<StyledProps>(props => ({
    padding: "28px 0 40px 0",
    "& > .products": {
        display: "flex",
        alignItems: "stretch",
        gap: "20px",
        // flexWrap: "wrap",
        marginBottom: "48px",
        "& .product-group": {
            display: "flex",
            alignItems: "stretch",
            gap: "20px",
            flexGrow: 1,
            "& > .product": {
                flexGrow: 1
            }
        }
    },
    "& > .button": {
        display: "flex",
        justifyContent: "center"
    },

    [mq(900)]: {
        "& > .products": {
            flexWrap: "wrap",
        },
    }
}))


export default FeaturedProducts;
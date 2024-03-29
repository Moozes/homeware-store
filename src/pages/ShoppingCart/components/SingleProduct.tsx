import styled from "@emotion/styled";
import Stepper from "components/Stepper";
import { HTMLProps } from "react";
import imgSrc from "assets/images/gray-stone-vase.png"
import { colors } from "utils/themes";
import { getFontCSS, mq } from "utils/functions";

type Props = HTMLProps<HTMLDivElement>

function Component(props: Props) {
    return (
        <div {...props} >
            <div className="desktop">
                <div className="product-container">
                    <div className="product-card">
                        <div className="img-container">
                            <img src={imgSrc} alt="" />
                        </div>
                        <div className="product-info">
                            <div className="title">Graystone vase</div>
                            <div className="text">A timeless ceramic vase with a tri color grey glaze.</div>
                            <div className="price">£85</div>
                        </div>
                    </div>
                </div>
                <div className="stepper-container">
                    <Stepper className="stepper" />
                </div>
                <div className="total-price">
                    £85
                </div>
            </div>

            <div className="mobile">
                <div className="img-container">
                    <img src={imgSrc} alt="" />
                </div>
                <div className="product-info">
                    <div className="title">Graystone vase</div>
                    <div className="text">A timeless ceramic vase with a tri color grey glaze.</div>
                    <div className="price">£85</div>
                    <Stepper className="stepper" />
                </div>
            </div>
        </div>
    )
}




type StyledProps = {}

const SingleProduct = styled(Component)<StyledProps>(props => ({
    "& > .desktop": {
        display: "flex",
        alignItems: "center",
        "& > .product-container": {
            flexGrow: 2,
            "& > .product-card": {
                display: "flex",
                alignItems: "center",
                justifyContent: "stretch",
                maxWidth: "365px",
                gap: "24px",
                "& > .img-container": {
                    "& > img": {
                        width: "109px",
                    },
                },
                "& > .product-info": {
                    "& > .title": {
                        ...getFontCSS("'Clash Display', sans-serif", 400, 20, 1.4*20),
                        color: colors.darkPrimary,
                        marginBottom: "8px",
                    },
                    "& > .text": {
                        ...getFontCSS("'Satoshi', sans-serif", 400, 14, 1.5*14),
                        color: colors.darkPrimary,
                        marginBottom: "8px",
                    },
                    "& > .price": {
                        ...getFontCSS("'Satoshi', sans-serif", 400, 16, 1.5*16),
                        color: colors.darkPrimary,
                    },
                },
            }
        },
        "& > .stepper-container": {
            flexGrow: 1,
            "& > .stepper": {
                background: colors.lightGray
            }
        },
        "& > .total-price": {
        },
    },

    "& > .mobile": {
        display: "none",
        alignItems: "stretch",
        gap: "22px",
        "& > .img-container": {
            "& > img": {
                width: "133px",
            },
        },
        "& > .product-info": {
            flexGrow: "1",
            "& > .title": {
                ...getFontCSS("'Clash Display', sans-serif", 400, 16, 1.4*16),
                color: colors.darkPrimary,
                marginBottom: "8px",
            },
            "& > .text": {
                ...getFontCSS("'Satoshi', sans-serif", 400, 14, 1.5*14),
                color: colors.darkPrimary,
                marginBottom: "8px",
            },
            "& > .price": {
                ...getFontCSS("'Satoshi', sans-serif", 400, 16, 1.5*16),
                color: colors.darkPrimary,
                marginBottom: "16px",
            },
            "& > .stepper": {
                width: "100%",
                background: colors.lightGray
            },
        }
    },

    [mq(820)]: {
        "& > .desktop": {
            display: "none"
        },
        "& > .mobile": {
            display: "flex"
        },
    }

}))


export default SingleProduct;
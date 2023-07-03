import styled from "@emotion/styled";
import { HTMLProps } from "react";
import chaire2 from "assets/images/chair2.png"
import Stepper from "components/Stepper";
import Button from "components/Button";
import { getFontCSS, mq } from "utils/functions";
import { colors } from "utils/themes";

type Props = HTMLProps<HTMLDivElement>

function Component(props: Props) {
    return (
        <div {...props} >
            <div className="img-container">
                <img src={chaire2} alt="" />
            </div>
            <div className="details">
                <div className="title-1">The Dandy Chair</div>
                <div className="price">£250</div>
                <div className="title-2">Description</div>
                <div className="text">A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.</div>
                <ul>
                    <li>Premium material</li>
                    <li>Handmade upholstery</li>
                    <li>Quality timeless classic</li>
                </ul>
                <table>
                    <caption className="title-2" >Dimensions</caption>
                    <thead>
                        <tr>
                            <th>Height</th>
                            <th>Width</th>
                            <th>Depth</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>110cm</td>
                            <td>75cm</td>
                            <td>50cm</td>
                        </tr>
                    </tbody>
                </table>
                <div className="actions">
                    <div className="title-2">Amount:</div>
                    <Stepper className="stepper" />
                    <div className="empty"></div>
                    <Button className="add-button" size="medium" variant="primary" >Add to cart</Button>
                </div>
            </div>
        </div>
    )
}




type StyledProps = {}

const ProductDetails = styled(Component)<StyledProps>(props => ({
    display: "flex",
    alignItems: "stretch",
    "& > .img-container": {
        width: "50%",
        flexGrow: 1,
        display: "block",
        img: {
            width: "100%",
            height: "100%"
        }
    },
    "& > .details": {
        width: "50%",
        flexGrow: 1,
        padding: "91px 102px 83px",
        ".title-1": {
            ...getFontCSS("'Clash Display', sans-serif", 400, 36, 1.2*36),
            color: colors.darkPrimary,
            marginBottom: "13px"
        },
        ".price": {
            ...getFontCSS("'Satoshi', sans-serif", 400, 24, 1.2*24),
            color: "#12131A",
            marginBottom: "54px"
        },
        ".title-2": {
            ...getFontCSS("'Clash Display', sans-serif", 400, 16, 1.2*16),
            color: "#505977",
            marginBottom: "16px",
        },
        ".text": {
            ...getFontCSS("'Satoshi', sans-serif", 400, 16, 1.2*16),
            marginBottom: "20px"
        },
        ul: {
            marginLeft: "25px",
            ...getFontCSS("'Satoshi', sans-serif", 400, 16, 1.2*16),
            marginBottom: "50px",
            color: "#505977",
            li: {
                marginBottom: "8px"
            }
        },
        table: {
            marginBottom: "49px",
            "caption.title-2": {
                textAlign: "start",
                marginBottom: "28px"
            },
            th: {
                ...getFontCSS("'Clash Display', sans-serif", 400, 14, 1.2*14),
                color: colors.darkPrimary,
                paddingBottom: "12px",
                paddingRight: "58px"
            },
            td: {
                ...getFontCSS("'Satoshi', sans-serif", 400, 16, 1.2*16),
                color: "#505977"
            }
        },
        "& > .actions": {
            display: "flex",
            alignItems: "center",
            gap: "22px",
            flexWrap: "wrap",
            ".stepper": {
                background: colors.lightGray
            },
            ".empty": {
                flexGrow: 1
            },
            ".title-2": {
                marginBottom: 0
            }
        }
    },

    [mq(900)]: {
        flexDirection: "column",
        "& > .img-container": {
            width: "100%",
        },
        "& > .details": {
            width: "100%",
        },
    },

    [mq(680)]: {
        "& > .img-container": {
            img: {
            }
        },
        "& > .details": {
            padding: "28px 24px 46px",
            ".title-1": {
                fontSize: "24px",
            },
            ".price": {
                fontSize: "20px",
                marginBottom: "28px"
            },
            ".title-2": {
                marginBottom: "12px"
            },
            ".text": {
                fontSize: "14px",
                marginBottom :"12px"
            },
            ul: {
                marginBottom: "28px",
                li: {
                }
            },
            table: {
                width: "100%",
                marginBottom: "32px",
                "caption.title-2": {
                    marginBottom: "16px"
                },
                th: {
                    paddingRight: 0,
                },
                td: {
                    textAlign: "center",
                },
                "th:not(:last-of-type), td:not(:last-of-type)": {
                    borderRight: "1px solid #EBE8F4"
                }
            },
            "& > .actions": {
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "12px",
                ".stepper": {
                    width: "100%",
                },
                ".empty": {
                },
                ".title-2": {
                },
                ".add-button": {
                    width: "100%"
                }
            }
        },
    }
}))


export default ProductDetails;
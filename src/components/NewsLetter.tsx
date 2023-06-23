import styled from "@emotion/styled";
import { HTMLProps } from "react";
import { ReactComponent as CheckmarkIcon } from "assets/icons/Checkmark--filled.svg";
import bgImage from "assets/images/newsletter.jpeg"; 
import TextInput from "./TextInput";
import Button from "./Button";
import { colors } from "utils/themes";
import { getFontCSS, mq } from "utils/functions";

type Props = HTMLProps<HTMLDivElement>

function Component(props: Props) {
    return (
        <div {...props} >
            <div className="inner-container" >
                <div className="title">Join the club and get the benefits</div>
                <div className="text">Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</div>
                <div className="bullet-points">
                    <div className="bullet-point">
                        <CheckmarkIcon/>
                        <div className="bullet-text">Exclusive offers</div>
                    </div>
                    <div className="bullet-point">
                        <CheckmarkIcon/>
                        <div className="bullet-text">Free events</div>
                    </div>
                    <div className="bullet-point">
                        <CheckmarkIcon/>
                        <div className="bullet-text">Large discounts</div>
                    </div>
                </div>
                <div className="form-container">
                    <TextInput className="email-input" variant="primary" placeholder="your@email.com" />
                    <Button variant="primary" size="medium">Sign up</Button>
                </div>
            </div>
        </div>
    )
}




type StyledProps = {}

const NewsLetter = styled(Component)<StyledProps>(props => ({
    display: "flex",
    padding: "97px 0 86px 0",
    background: `url(${bgImage}) no-repeat center/cover`,
    color: colors.white,
    textAlign: "center",
    ".inner-container": {
        margin: "auto",
        maxWidth: "494px",
        "& > .title": {
            ...getFontCSS("'Clash Display', sans-serif", 400, 32, 1.4*32),
            marginBottom: "12px",
        },
        "& > .text": {
            ...getFontCSS("'Satoshi', sans-serif", 400, 18, 1.5*18),
            marginBottom: "30px",
        },
        "& > .bullet-points": {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flexWrap: "wrap",
            gap: "8px",
            marginBottom: "40px",
            "& > .bullet-point": {
                display: "flex",
                gap: "8px",
                alignItems: "center",
                svg: {},
                "& > .bullet-text": {
                    ...getFontCSS("'Satoshi', sans-serif", 400, 16, 1.5*16),
                }
            }
        },
        "& > .form-container": {
            display: "flex",
            alignItems: "stretch",
            width: "100%",
            "& > .email-input": {
                flexGrow: 1
            }
        },
    },

    [mq(600)]: {
        textAlign: "start",
        padding: "24px 24px 35px 24px",
        ".inner-container": {
            "& > .title": {
                ...getFontCSS("'Clash Display', sans-serif", 400, 24, 1.4*24),
            },
            "& > .text": {
                ...getFontCSS("'Satoshi', sans-serif", 400, 14, 1.5*14),
            },
            "& > .bullet-points": {
                flexDirection: "column",
                alignItems: "flex-start",
                "& > .bullet-point": {
                    svg: {},
                    "& > .bullet-text": {}
                }
            },
            "& > .form-container": {
                "& > .email-input": {
                }
            },
        },
    }
}))


export default NewsLetter;
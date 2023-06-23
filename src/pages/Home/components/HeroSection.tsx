import styled from "@emotion/styled";
import Button from "components/Button";
import { HTMLProps } from "react";
import heroBackground from "assets/images/hero.jpeg";
import { colors } from "utils/themes";
import { getFontCSS, mq } from "utils/functions";
import { NavLink } from "react-router-dom";

type Props = HTMLProps<HTMLDivElement>

function Component(props: Props) {
    return (
        <div {...props} >
            <div className="paper">
                <div className="title">Luxury homeware for people who love timeless design quality</div>
                <div className="text">Shop the new Spring 2022 collection today</div>
                <div className="empty"></div>
                <NavLink to="products">
                    <Button variant="secondary" size="medium">View collection</Button>
                </NavLink>
            </div>
            <div className="mobile-hero"></div>
        </div>
    )
}




type StyledProps = {}

const HeroSection = styled(Component)<StyledProps>(props => ({
    display: "flex",
    justifyContent: "flex-end",
    padding: "103px 80px",
    background: `url(${heroBackground}) no-repeat center/cover`,
    height: "740px",
    
    ".paper": {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "46px 56px",
        background: colors.white,
        maxWidth: "630px",
        ".empty": {
            flexGrow: 1
        },
        ".title": {
            ...getFontCSS("'Clash Display', sans-serif", 400, 32, 45),
            color: "#22202E",
            marginBottom: "20px"
        },
        ".text": {
            ...getFontCSS("'Satoshi', sans-serif", 400, 18, 27),
            color: "#5B5676",    
        }
    },

    ".mobile-hero": {
        display: "none"
    },

    [mq(765)]: {
        padding: "103px 40px",
        justifyContent: "center",
    },
    [mq(550)]: {
        padding: 0,
        background: "none",
        height: "auto",
        display: "block",
        ".paper": {
            width: "100%",
            minHeight: "auto",
            padding: "47px 24px",
            alignItems: "stretch",
            ".title": {
                marginBottom: "12px",
                ...getFontCSS("'Clash Display', sans-serif", 400, 24, 30),
            },
            ".text": {
                marginBottom: "32px",
                ...getFontCSS("'Clash Display', sans-serif", 400, 16, 22),
            },
        },
        ".mobile-hero": {
            display: "block",
            background: `url(${heroBackground}) no-repeat center/cover`,
            height: "304px",
        },
    },
}))


export default HeroSection;
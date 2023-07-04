import styled from "@emotion/styled";
import { HTMLProps } from "react";
import imageSrc from "assets/images/all-products-hero.jpg"
import { getFontCSS, mq } from "utils/functions";


type Props = HTMLProps<HTMLDivElement>

function Component(props: Props) {
    return (
        <div {...props} >
            <div className="text">All products</div>
            <img src={imageSrc}alt="" />
        </div>
    )
}




type StyledProps = {}

const HeroSection = styled(Component)<StyledProps>(props => ({
    height: "209px",
    position: "relative",
    padding: "123px 0 36px",
    "& > .text": {
        position: "relative",
        color: "white",
        zIndex: 2,
        ...getFontCSS("'Clash Display', sans-serif", 400, 36, 1.4*36),
        paddingLeft: "80px",
    },
    "& > img": {
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 1,
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },

    [mq(390)]: {
        height: "146px",
        position: "relative",
        padding: "64px 0 32px",
        "& > .text": {
            paddingLeft: 0,
            textAlign: "center"
        },
    }
}))


export default HeroSection;
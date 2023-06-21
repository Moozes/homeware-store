import styled from "@emotion/styled";
import Button from "components/Button";
import { HTMLProps } from "react";
import { getFontCSS, mq } from "utils/functions";
import { colors } from "utils/themes";
import storyImage from "assets/images/story.png";

type Props = HTMLProps<HTMLDivElement>

function Component(props: Props) {
    return (
        <div {...props} >
            <div className="left">
                <div className="title">It started with a small idea</div>
                <div className="text">A global brand with local beginnings, our story begain in a small studio in South London in early 2014</div>
                <Button variant="opaque" >View Collection</Button>
            </div>
            <div className="right">
                <img src={storyImage} alt="" />
            </div>
        </div>
    )
}




type StyledProps = {}

const StorySection = styled(Component)<StyledProps>(props => ({
    display: "flex",
    alignItems: "stretch",
    gap: "16px",
    padding: "60px 0",
    ".left": {
        flexGrow: 1,
        flexBasis: 0,
        background: colors.darkPrimary,
        color: colors.white,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "64px",
        ".title": {
            ...getFontCSS("'Clash Display', sans-serif", 400, 32, 32*1.5),
            marginBottom: "12px"
        },
        ".text": {
            ...getFontCSS("'Satoshi', sans-serif", 400, 18, 1.5*18),
            flexGrow: 1,
            marginBottom: "12px"
        },
    },
    ".right": {
        flexGrow: 1,
        flexBasis: 0,
        img: {
            width: "100%",
            height: "100%",
        }
    },

    [mq(1000)]: {
        flexDirection: "column",
        ".left": {
            alignItems: "stretch",
            padding: "36px 30px",
            ".title": {
                ...getFontCSS("'Clash Display', sans-serif", 400, 20, 20*1.4),
            },
            ".text": {
                ...getFontCSS("'Satoshi', sans-serif", 400, 14, 1.5*14),
                marginBottom: "56px"
            },
        },
        ".right": {
            img: {
            }
        },
    }
}))


export default StorySection;
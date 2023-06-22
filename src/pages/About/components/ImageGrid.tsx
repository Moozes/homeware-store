import styled from "@emotion/styled";
import Button from "components/Button";
import { HTMLProps } from "react";
import image1 from "assets/images/about-image-1.png";
import image2 from "assets/images/about-image-2.png";
import { getFontCSS, mq } from "utils/functions";
import { colors } from "utils/themes";

type Props = HTMLProps<HTMLDivElement>

function Component(props: Props) {
    return (
        <div {...props}>
            <div className="grid">
                <div className="description">
                    <div className="title">From a studio in London to a global brand with over 400 outlets</div>
                    <div className="text-1">When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.</div>
                    <div className="text-2">Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</div>
                    <Button className="button" variant="secondary" >Get in touch</Button>
                </div>
                <div className="image-container">
                    <img src={image1} alt="" />
                </div>
            </div>
            <div className="grid">
                <div className="image-container">
                    <img src={image2} alt="" />
                </div>
                <div className="description">
                    <div className="title">Our service isn't just personal, it's actually hyper personally exquisite</div>
                    <div className="text-1">When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. </div>
                    <div className="text-2">Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</div>
                    <Button className="button" variant="secondary" >Get in touch</Button>
                </div>
            </div>
        </div>
    )
}




type StyledProps = {}

const ImageGrid = styled(Component)<StyledProps>(props => ({
    "& > .grid": {
        display: "flex",
        alignItems: "stretch",
        "& > .description": {
            flexGrow: 1,
            flexBasis: "50%",
            padding: "72px 100px 54px 84px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            "& > .title": {
                ...getFontCSS("'Clash Display', sans-serif", 500, 24, 1.4*24),
                color: colors.darkPrimary,
                marginBottom: "25px",
            },
            "& > .text-1": {
                ...getFontCSS("'Satoshi', sans-serif", 400, 16, 1.5*16),
                color: "#505977",
                marginBottom: "25px",
            },
            "& > .text-2": {
                ...getFontCSS("'Satoshi', sans-serif", 400, 16, 1.5*16),
                color: "#505977",
                marginBottom: "64px",
                flexGrow: 1
            },
            "& > .button": {},
        },
        "& > .image-container": {
            flexGrow: 1,
            flexBasis: "50%",
            "& > img": {
                width: "100%",
                height: "100%",
                display: "block"
            }
        },
    },

    [mq(900)]: {
        "& > .grid": {
            flexDirection: "column",
            "& > .description": {
                padding: "48px 24px 38px 24px",
                "& > .title": {
                    ...getFontCSS("'Clash Display', sans-serif", 500, 20, 1.4*20),
                    marginBottom: "12px",
                },
                "& > .text-1": {
                    ...getFontCSS("'Satoshi', sans-serif", 400, 14, 1.5*14),
                    marginBottom: "12px",
                },
                "& > .text-2": {
                    ...getFontCSS("'Satoshi', sans-serif", 400, 14, 1.5*14),
                },
                "& > .button": {},
            },
            "& > .image-container": {
                "& > img": {
                }
            },
        },
    }
}))


export default ImageGrid;
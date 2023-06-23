import styled from "@emotion/styled";
import Card from "components/Card";
import { HTMLProps } from "react";
import { getFontCSS, mq } from "utils/functions";
import { colors } from "utils/themes";

type Props = HTMLProps<HTMLDivElement>

function Component(props: Props) {
    return (
        <div {...props} >
            <div className="title">What makes our brand different</div>
            <div className="cards">
                <Card icon="delivery" title="Next day as standard" text="Order before 3pm and get your order the next day as standard" />
                <Card icon="checkmark" title="Made by true artisans" text="Handmade crafted goods made with real passion and craftmanship" />
                <Card icon="purchase" title="Unbeatable prices" text="For our materials and quality you won't find better prices anywhere" />
                <Card icon="sprout" title="Recycled packaging" text="We use 100% recycled to ensure our footprint is more manageable" />
            </div>
        </div>
    )
}




type StyledProps = {}

const CardsSection = styled(Component)<StyledProps>(props => ({
    background: colors.white,
    padding: "80px 0",
    "& > .title": {
        ...getFontCSS("'Clash Display', sans-serif", 400, 24, 34),
        color: colors.darkPrimary,
        marginBottom: "36px",
        textAlign: "center",
    },
    "& > .cards": {
        display: "flex",
        alignItems: "stretch",
        gap: "22px",
        // flexWrap: "wrap",
        justifyContent: "center",
        "& > div": {
            width: "305px",
            flexGrow: 1
        }
    },

    [mq(1000)]: {
        "& > .cards": {
            flexWrap: "wrap",
        },
    },

    [mq(680)]: {
        "& > .title": {
            textAlign: "start",
        },
    }
}))


export default CardsSection;
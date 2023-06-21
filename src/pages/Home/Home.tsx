import styled from "@emotion/styled";
import { HTMLProps } from "react";
import CardsSection from "./components/CardsSection";
import { mq } from "utils/functions";
import Header from "components/Header";
import HeroSection from "./components/HeroSection";
import Footer from "components/Footer";
import Product from "components/Product";
import chairImage from "assets/images/chair.png"
import FeaturedProducts from "components/FeaturedProducts";
import StorySection from "./components/StorySection";
import NewsLetter from "components/NewsLetter";

type Props = HTMLProps<HTMLDivElement>

function Component(props: Props) {
    return (
        <div {...props} >
            <Header/>
            <HeroSection/>
            <div className="container">
                <CardsSection/>
                <FeaturedProducts/>
                <StorySection/>
            </div>
            <NewsLetter/>
            <Footer/>
        </div>
    )
}




type StyledProps = {}

const Home = styled(Component)<StyledProps>(props => ({
    "& > .container": {
        padding: "0 80px"
    },

    [mq(680)]: {
        "& > .container": {
            padding: "0 24px"
        },
    }
}))


export default Home;
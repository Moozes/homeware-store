import styled from "@emotion/styled";
import { HTMLProps } from "react";
import PageTitle from "./components/PageTitle";
import ImageGrid from "./components/ImageGrid";
import CardsSection from "components/CardsSection";
import NewsLetter from "components/NewsLetter";

type Props = HTMLProps<HTMLDivElement>

function Component(props: Props) {
    return (
        <div {...props} >
            <PageTitle/>
            <ImageGrid/>
            <CardsSection/>
            <NewsLetter/>
        </div>
    )
}




type StyledProps = {}

const About = styled(Component)<StyledProps>(props => ({

}))


export default About;
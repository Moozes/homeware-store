import styled from "@emotion/styled";
import { HTMLProps } from "react";
import PageTitle from "./components/PageTitle";
import ImageGrid from "./components/ImageGrid";

type Props = HTMLProps<HTMLDivElement>

function Component(props: Props) {
    return (
        <div {...props} >
            {/* <PageTitle/> */}
            <ImageGrid/>
        </div>
    )
}




type StyledProps = {}

const About = styled(Component)<StyledProps>(props => ({

}))


export default About;
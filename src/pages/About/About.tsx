import styled from "@emotion/styled";
import { HTMLProps } from "react";
import PageTitle from "./components/PageTitle";

type Props = HTMLProps<HTMLDivElement>

function Component(props: Props) {
    return (
        <div {...props} >
            <PageTitle/>
        </div>
    )
}




type StyledProps = {}

const About = styled(Component)<StyledProps>(props => ({

}))


export default About;
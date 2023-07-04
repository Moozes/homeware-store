import styled from "@emotion/styled";
import { HTMLProps } from "react";
import HeroSection from "./components/HeroSection";

type Props = HTMLProps<HTMLDivElement>

function Component(props: Props) {
    return (
        <div {...props} >
            <HeroSection/>
        </div>
    )
}




type StyledProps = {}

const AllProducts = styled(Component)<StyledProps>(props => ({

}))


export default AllProducts;
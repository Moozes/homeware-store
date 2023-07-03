import styled from "@emotion/styled";
import { HTMLProps } from "react";
import SingleProduct from "./components/SingleProduct";

type Props = HTMLProps<HTMLDivElement>

function Component(props: Props) {
    return (
        <div {...props} >
            <SingleProduct/>
        </div>
    )
}




type StyledProps = {}

const ShoppingCart = styled(Component)<StyledProps>(props => ({

}))


export default ShoppingCart;

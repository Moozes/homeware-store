import styled from "@emotion/styled";
import { HTMLProps, useEffect } from "react";
import { useLocation } from "react-router-dom";

type Props = HTMLProps<HTMLDivElement>

function Component(props: Props) {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scroll({top: 0})
    }, [pathname])
    return null;
}




type StyledProps = {}

const ScrollToTop = styled(Component)<StyledProps>(props => ({

}))


export default ScrollToTop;
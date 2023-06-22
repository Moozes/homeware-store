import styled from "@emotion/styled";
import { HTMLProps } from "react";
import { getFontCSS, mq } from "utils/functions";
import { colors } from "utils/themes";

type Props = HTMLProps<HTMLDivElement>

function Component(props: Props) {
    return (
        <div {...props} >
            A brand built on the love of craftmanship, quality and outstanding customer service
        </div>
    )
}




type StyledProps = {}

const PageTitle = styled(Component)<StyledProps>(props => ({
    width: "704px",
    margin: "auto",
    ...getFontCSS("'Clash Display', sans-serif", 400, 36, 1.4*36),
    color: colors.darkPrimary,
    padding: "67px 0 79px 0",
    
    [mq(752)]: {
        ...getFontCSS("'Clash Display', sans-serif", 400, 32, 1.4*32),
        padding: "32px 24px",
    }
}))


export default PageTitle;
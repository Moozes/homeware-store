import styled from "@emotion/styled";
import { HTMLProps } from "react";
import { ReactComponent as SearchIcon } from "assets/icons/Search.svg";
import { ReactComponent as ShoppingCartIcon } from "assets/icons/Shopping--cart.svg";
import { getFontCSS, mq } from "utils/functions";
import { NavLink } from "react-router-dom";

type Props =  HTMLProps<HTMLHeadElement>

function Component(props: Props) {
    return (
        <header {...props} >
            <NavLink to="/" className="brand">Avion</NavLink>
            <span className="empty" ></span>
            <span className="links">
                <NavLink to="products">All Products</NavLink>
                <NavLink to="about">About us</NavLink>
            </span>
            <span className="icons">
                {/* <NavLink to="#"> */}
                    <SearchIcon/>
                {/* </NavLink> */}
                <NavLink to="shopping-cart">
                    <ShoppingCartIcon/>
                </NavLink>
            </span>
        </header>
    )
}




type StyledProps = {}

const Header = styled(Component)<StyledProps>(props => ({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "47px",
    padding: "21px 28px",
    "&  a": {
        textDecoration: "none",
    },
    "& > .brand": {
        ...getFontCSS("'Clash Display', sans-serif", 400, 24, 30),
        color: "#22202E",
    },
    "& > .empty": {
      flexGrow: 1
    },
    "& > .links": {
        display: "flex",
        gap: "32px",
        ...getFontCSS("'Satoshi', sans-serif", 400, 16, 22),
        "& > a": {
            color: "#726E8D",
        }
    },
    "& > .icons": {
        display: "flex",
        gap: "16px",
        "& > a ": {
            display: "flex",
            alignItems: "center",
            "& > svg": {
                width: "16px",
                height: "16px",
            }
        }
    },
    [mq(488)]: {
        gap: "20px",
        justifyContent: "center",
        "& > .empty": {
            flexGrow: 0
        },
        "& > .brand": {
            display: "block",
            width: "100%",
            textAlign: "center"
        }
    }
}))


export default Header;
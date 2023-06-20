import styled from "@emotion/styled";
import { HTMLProps } from "react";
import TextInput from "./TextInput";
import Button from "./Button";
import { getFontCSS, mq } from "utils/functions";
import { colors } from "utils/themes";
import { ReactComponent as FacebookIcon } from "assets/icons/Logo--facebook.svg";
import { ReactComponent as LinkedinIcon } from "assets/icons/Logo--linkedin.svg";
import { ReactComponent as InstagramIcon } from "assets/icons/Logo--instagram.svg";
import { ReactComponent as SkypeIcon } from "assets/icons/Logo--skype.svg";
import { ReactComponent as TwitterIcon } from "assets/icons/Logo--twitter.svg";
import { ReactComponent as PinterestIcon } from "assets/icons/Logo--pinterest.svg";

type Props = HTMLProps<HTMLElement>

// TODO: add <NavLink> inside list items

function Component(props: Props) {
    return (
        <footer {...props} >
            <div className="lists">
                <ul className="list-1">
                    <li className="title">Menu</li>
                    <li className="list-item">New arrivals</li>
                    <li className="list-item">Best sellers</li>
                    <li className="list-item">Recently viewed</li>
                    <li className="list-item">Popular this week</li>
                    <li className="list-item">All products</li>
                </ul>
                <ul className="list-2">            
                    <li className="title">Categories</li>
                    <li className="list-item">Crockery</li>
                    <li className="list-item">Furniture</li>
                    <li className="list-item">Homeware</li>
                    <li className="list-item">Plant pots</li>
                    <li className="list-item">Chairs</li>
                    <li className="list-item">Crockery</li>
                </ul>
                <ul className="list-3">            
                    <li className="title">Our company</li>
                    <li className="list-item">About us</li>
                </ul>
                <div className="mailing-list">
                    <div className="title">Join our mailing list</div>
                    <div className="email-form">
                        <TextInput className="text-input" type="email" variant="opaque" placeholder="your@email.com"/>
                        <Button variant="white" >Sign Up</Button>
                    </div>
                </div>
            </div>
            <hr />
            <div className="social-links">
                <div className="copyright" >Copyright 2022 Avion LTD</div>
                <div className="empty"></div>
                <div className="icons">
                    <LinkedinIcon/>
                    <FacebookIcon/>
                    <InstagramIcon/>
                    <SkypeIcon/>
                    <TwitterIcon/>
                    <PinterestIcon/>
                </div>
            </div>
        </footer>
    )
}




type StyledProps = {}

const Footer = styled(Component)<StyledProps>(props => ({
    background: colors.darkPrimary,
    color: colors.white,
    padding: "58px 80px 25px 80px",
    [mq(940)]: {
        padding: "40px 25px 20px 25px",
    },
    "& > .lists": {
        display: "flex",
        gap: "109px",
        flexWrap: "wrap",
        [mq(1117)]: {
            gap: "50px"
        }
    },
    "&  ul": {
        listStyle: "none",
        margin: 0,
        padding: 0
    },
    "& li": {
        marginBottom: "12px",
    },
    "& .title": {
        ...getFontCSS("'Clash Display', sans-serif", 400, 16, 20),
    },
    "& .list-item": {
        ...getFontCSS("'Satoshi', sans-serif", 400, 14, 19),
    },
    "& .mailing-list": {
        [mq(940)]: {
            width: "100%"
        }
    },
    "& .mailing-list .title": {
        marginBottom: "12px",
    },
    "& .mailing-list .email-form": {
        display: "flex",
        alignItems: "stretch",
        [mq(940)]: {
            width: "100%",
            input: {
                flexGrow: 1,
            }
        }
    },
    "hr": {
        margin: "48px 0 24px 0",
        borderColor: colors.primary
    },
    "& > .social-links": {
        display: "flex",
        alignItems: "center",
        gap: "24px",
        flexWrap: "wrap",
        "& > .copyright": {
            ...getFontCSS("'Satoshi', sans-serif", 400, 14, 19),
            [mq(640)]: {
                width: "100%",
                textAlign: "center"
            },
        },
        "& > .empty": {
            flexGrow: 1
        },
        ".icons": {
            display: "flex",
            alignItems: "center",
            gap: "24px",
            [mq(640)]: {
                display: "none"
            },
            "svg": {
                height: "24px",
                width: "24px",
                "path": {
                    fill: colors.white
                }
            }
        }
    }
}))


export default Footer;
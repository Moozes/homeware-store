import styled from "@emotion/styled";
import Header from "components/Header";
import Footer from "components/Footer";
import HeroSection from "pages/Home/components/HeroSection";
import Card from "components/Card";
import { colors } from "utils/themes";
import { getFontCSS } from "utils/functions";

type Props = {
  className?: string
}

function App(props: Props) {
  return (
    <div {...props} >
      {/* <Header/>
      <HeroSection/>
      <Footer/> */}
      <Card icon="delivery" title="blabla" text="blablalba" />
    </div>
  );
}

type StyledProps = {}

const AppS = styled(App)<StyledProps>(props => ({
  background: colors.lightGray,
  padding: "48px",
  svg: {
    // width: "24px",
    // height: "24px",
    marginBottom: "12px"
  },
  ".title": {
    ...getFontCSS("'Clash Display', sans-serif", 400, 20, 28),
    color: colors.darkPrimary,
    marginBottom: "12px"
  },
  ".text": {
    ...getFontCSS("'Satoshi', sans-serif", 400, 16, 24),
    color: colors.darkPrimary
  },
}))

export default AppS;

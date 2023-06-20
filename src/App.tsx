import styled from "@emotion/styled";
import Header from "components/Header";
import Footer from "components/Footer";
import HeroSection from "pages/Home/components/HeroSection";

type Props = {
  className?: string
}

function App(props: Props) {
  return (
    <div {...props} >
      <HeroSection/>
    </div>
  );
}

type StyledProps = {}

const AppS = styled(App)<StyledProps>(props => ({

}))

export default AppS;

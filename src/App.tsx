import styled from "@emotion/styled";
import Footer from "components/Footer";
import Header from "components/Header";
import ScrollToTop from "components/ScrollToTop";
import Home from "pages/Home/Home";
import { HTMLProps } from "react";
import { Outlet } from "react-router-dom";

type Props = HTMLProps<HTMLDivElement>
function Component(props: Props) {
  return (
    <div {...props} >
      <ScrollToTop/>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

type StyledProps = {}

const App = styled(Component)<StyledProps>(props => ({
  "*" : {
    margin: 0,
    padding: 0,
    boxSizing: "border-box"
  }
}))

export default App;

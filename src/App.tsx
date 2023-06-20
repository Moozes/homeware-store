import styled from "@emotion/styled";
import Header from "components/Header";
import Footer from "components/Footer";


type Props = {
  className?: string
}

function App(props: Props) {
  return (
    <div {...props} >
      <Header/>
      <Footer/>
    </div>
  );
}

type StyledProps = {}

const AppS = styled(App)<StyledProps>(props => ({

}))

export default AppS;

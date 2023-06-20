import styled from "@emotion/styled";
import Home from "pages/Home/Home";

type Props = {
  className?: string
}

function App(props: Props) {
  return (
    <div {...props} >
      <Home/>
    </div>
  );
}

type StyledProps = {}

const AppS = styled(App)<StyledProps>(props => ({
 
}))

export default AppS;

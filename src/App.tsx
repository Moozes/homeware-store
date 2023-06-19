import { colors } from "utils/themes";
import Stepper from "components/Stepper";
import Checkbox from "components/Checkbox";
import styled from "@emotion/styled";
import Header from "components/Header";


type Props = {
  className?: string
}

function App(props: Props) {
  return (
    <div {...props} >
      <Header/>
    </div>
  );
}

type StyledProps = {}

const AppS = styled(App)<StyledProps>(props => ({

}))

export default AppS;

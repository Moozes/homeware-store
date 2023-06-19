import { colors } from "utils/themes";
import Stepper from "components/Stepper";
import Checkbox from "components/Checkbox";
import styled from "@emotion/styled";


type Props = {
  className?: string
}

function App(props: Props) {
  return (
    <div {...props} >
      <Checkbox label="moussa" className="c"  />
    </div>
  );
}

type StyledProps = {}

const AppS = styled(App)<StyledProps>(props => ({
  // background: "red",
  "& > .c > label": {
    color: "red",
  }
}))

export default AppS;

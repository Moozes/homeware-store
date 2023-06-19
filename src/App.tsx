import Button from "components/Button";
import TextInput from "components/TextInput";
import { colors } from "utils/themes";
import Stepper from "components/Stepper";


function App() {
  return (
    <div style={{background: colors.primary}} >
      <Stepper/>
    </div>
  );
}

export default App;

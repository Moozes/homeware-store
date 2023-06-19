import Button from "components/Button";
import TextInput from "components/TextInput";
import { colors } from "utils/themes";


function App() {
  return (
    <div style={{background: colors.primary}} >
      starter template
      <TextInput placeholder="your@email.com" variant="opaque" />
    </div>
  );
}

export default App;

import "./App.css";
import ControlledField from "./components/ControlledField";
import FormAction from "./components/FormAction";
import SimpleForm from "./components/SimpleForm";

function App() {
  return (
    <>
      <section id="center">
        <div>
          <h1>Get started</h1>
        </div>
        {/* <SimpleForm></SimpleForm> */}
        {/* <FormAction></FormAction> */}
        <ControlledField></ControlledField>
      </section>
    </>
  );
}

export default App;

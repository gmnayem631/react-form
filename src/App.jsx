import "./App.css";
import ControlledField from "./components/ControlledField";
import FormAction from "./components/FormAction";
import ProductManagement from "./components/ProductManagement";
import SimpleForm from "./components/SimpleForm";
import Uncontrolled from "./components/Uncontrolled";

function App() {
  return (
    <>
      <section id="center">
        <div>
          <h1>Get started</h1>
        </div>
        {/* <SimpleForm></SimpleForm> */}
        {/* <FormAction></FormAction> */}
        {/* <ControlledField></ControlledField> */}
        {/* <Uncontrolled></Uncontrolled> */}
        <ProductManagement></ProductManagement>
      </section>
    </>
  );
}

export default App;

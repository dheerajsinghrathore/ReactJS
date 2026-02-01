import Student1 from "./Student1.jsx";
import Student2 from "./Student2.jsx";
import Student3 from "./Student3.jsx";

function App() {
  return (
    <div>
      <Student1 />
      <Student2 />
      <Student3 name="Deepak" roll={103} />
    </div>
  );
}

export default App;

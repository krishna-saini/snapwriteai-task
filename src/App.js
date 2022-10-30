import ImageUploadSection from "./components/Image/ImageUploadSection";
import TextSection1 from "./components/Text/TextSection1";
import "./App.css";

function App() {
  return (
    <div className="container">
      <ImageUploadSection/>
      <div className="leftSection">
        <TextSection1 />
        <TextSection1 />
      </div>
    </div>
  );
}

export default App;

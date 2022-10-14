import React from "react";
import './Image.css'
import html2canvas from "html2canvas";


export default function Image(props) {
  const printRef = React.useRef();

  const handleDownloadImage = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);

    const data = canvas.toDataURL("image/jpg");
    const link = document.createElement("a");

    if (typeof link.download === "string") {
      link.href = data;
      link.download = "image.jpg";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }

    // props.setTrigger(false);
  };

  return (
    <div className="image_container-outer">
      <div className="image_container" ref={printRef}>
        <h1>paragrapgh</h1>
        {/* <div id="image">
          <p className="img-text topPara" id="heading">It will take</p>
          <p className="img-text">only <span className="amount">{(props.currency == 'INR') ? `₹` : `$`} {props.totalCost}</span></p>
          <p className="img-text">to eradicate homelessness from {props.city}!</p>
          <h3 className="hashtag">#TogetherWeCan</h3>
        </div> */}
      </div>
      <button className="saveImage-btn" onClick={handleDownloadImage}>Save image</button>
    </div>
  );
}
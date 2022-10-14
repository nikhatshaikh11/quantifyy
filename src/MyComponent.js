// how to use html2canvas to download component as image in react?
import {
  exportComponentAsJPEG,
  exportComponentAsPDF,
  exportComponentAsPNG
} from "react-component-export-image";
import React, { useRef } from "react";
import './mycomponent.css';

const ComponentToPrint = React.forwardRef((props, ref) => (
  <div className="image-container" ref={ref} style={{ marginTop: "10px" }}>
    <span className="img-text-container">
    <span className="share-cause flex-item">{`It will take around ${props.currency === 'INR' ? '₹' : '$'}`}</span> {props.totalCost > 999999999 && <span className="share-cause">{`${props.totalCost/1000000000}bn`}</span>}{(props.totalCost < 1000000000 && props.totalCost > 999999 && props.totalCost > 999) && <span className="share-cause">{`${props.totalCost/1000000}mn`}</span>} {(props.totalCost > 999 && props.totalCost < 1000000) && <span className="share-cause">{`${props.totalCost/1000000}mn`}</span>}<span className="share-cause flex-item">{`to eradicate homelessnes from your city ${props.city}!`}</span>
    </span>
    <div className="hashtag">#TogetherWeCan</div>
  </div>
));

const MyComponent = (props) => {
  const componentRef = useRef();

  return (
    <React.Fragment>
      <ComponentToPrint ref={componentRef} city={props.city} currency={props.currency} totalCost={props.totalCost} shortenedTotalCost={props.shortenedTotalCost}/>
      <button id='save-btn' onClick={() => exportComponentAsJPEG(componentRef)}>
        Save Image
      </button>
      {/* <button onClick={() => exportComponentAsPDF(componentRef)}>
        Export As PDF
      </button>
      <button onClick={() => exportComponentAsPNG(componentRef)}>
        Export As PNG
      </button> */}
    </React.Fragment>
  );
};

export default MyComponent;






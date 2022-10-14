import './Popup.css'
import Image from './Image.js'
import MyComponent from './MyComponent.js'

const Popup = (props) => {

    return props.trigger ? (
      <div className="popup" onClick={(event) => {
        props.setTrigger(false);
      }}>
        <div className="popup-inner" onClick={(event) => {
        event.stopPropagation();
      }}>
          <h3 id='name'>{props.name}</h3>
          <button 
            className="close-btn"
            onClick={() => {
              props.setTrigger(false);
            }}
          >
            X
          </button>
          <MyComponent trigger={props.buttonPopup} city={props.city} population={props.population} percentage={props.percentage} oneHomeCost={props.oneHomeCost} familySize={props.familySize} currency={props.currency} totalCost={props.totalCost} shortenedTotalCost={props.shortenedTotalCost}/>
        </div>
      </div>
    ) : (
      ""
    );
  };
  
  export default Popup;
  
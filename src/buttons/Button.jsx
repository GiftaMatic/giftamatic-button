import './Button.css';
import { FaCoins } from "react-icons/fa";

function GiftaMaticButton({account, campaignId}) {
  return (
    <div className="buttonContainer">
      <button className="button-75" onClick={() => onClickHandler(account, campaignId)}>
        <div className="icon">
          <FaCoins  />
        </div>
        Donate GiftaMatic
        </button>
    </div>
  );
}

function onClickHandler(account, campaignId) {
  window.location.href = "https://giftamatic.org/" + account + "/" + campaignId
}

export default GiftaMaticButton

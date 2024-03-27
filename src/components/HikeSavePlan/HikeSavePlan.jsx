import * as hikeAPI from "../../utilities/hikes-api";
import "./HikeSavePlan.css";

function HikeSavePlan({ getHikeState }) {
  const _handleSaveHikePlan = () => {
    hikeAPI.saveHikePlan(getHikeState());
    ///api/hikes/hike start with
  };

  return (
    <button className="btn btn-success" onClick={_handleSaveHikePlan}>
      <a className="savehike" href="/">
        Save Hike Plan
      </a>
    </button>
  );
}

export default HikeSavePlan;

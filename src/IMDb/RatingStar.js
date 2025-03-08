import React from "react";
import "./RatingStar.css";

class RatingStar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: props.rating ?? 0, // Default to 0 if rating is null or undefined
    };
  }

  render() {
    return (
      <button className="rating-btn">
        ⭐ Rating {this.state.rating}
      </button>
    );
  }
}

export default RatingStar;

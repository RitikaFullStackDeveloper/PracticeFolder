
import React, { Component } from "react";
import "./Actor.css";

const actors = [
  {
    name: "Saif Ali Khan",
    image: "https://i.pinimg.com/236x/dc/5b/9e/dc5b9e847b734590d36a50cfc9e38e73.jpg",
    movies: ["Dil Chahta Hai", "Omkara", "Kal Ho Naa Ho", "Hum Tum", "Tanhaji"],
  },
  {
    name: "Priyanka Chopra",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5X-3xp-H2-opEovu1WYZthPoglH8xGXHOrg&s",
    movies: ["Barfi!", "Mary Kom", "Fashion", "The Sky Is Pink", "Don"],
  },
  {
    name: "Kareena Kapoor",
    image: "https://i.pinimg.com/474x/a9/e2/9f/a9e29fbed133d7835cda48df2d924f8b.jpg",
    movies: ["Jab We Met", "Tanu Weds Manu", "3 Idiots", "Heroine", "Veere Di Wedding"],
  },
  {
    name: "Sidharth Malhotra",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7HF1z6MP2jhaL1u_MKgbbeZjLeX7GOaJLe_6jsIPjq3PMo5bslcbUMhTRP0fM59329ZA&usqp=CAU",
    movies: ["Student of the Year", "Shershaah", "Ek Villain", "Hasee Toh Phasee", "Kapoor & Sons"],
  },
  {
    name: "Kiara Advani",
    image: "https://i.pinimg.com/736x/76/02/2b/76022b6d5d756ad1421765a626966a95.jpg",
    movies: ["Fugly", "MS Dhoni", "Good Newwz", "Guilty", "Jugjugg Jeeyo"],
  },
  {
    name: "Alia Bhatt",
    image: "https://freebollywoodsnaps.wordpress.com/wp-content/uploads/2016/01/a8f906efcc4cddfe12f99a434818caf2.jpg?w=768",
    movies: ["Student of the Year", "Raazi", "Gangubai Kathiawadi", "Badrinath Ki Dulhania", "Rocky Aur Rani Kii Prem Kahaani"],
  },
  {
    name: "Rohit Saraf",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkZzcBq2dQp7UZo7m5W_eT977-6qgXacl5cHoW5JJuwAm82TU_xCGwPDk_Dm0Cr0vyNB0&usqp=CAU",
    movies: ["Dear Zindagi", "Ludo", "Kamali from Nadukkaveri", "The Sky Is Pink", "Mismatched"],
  },
  {
    name: "Aamir Khan",
    image: "https://i.pinimg.com/736x/29/84/43/29844332d4c5cadd1f067d368bd56d8b.jpg",
    movies: ["3 Idiots", "Rang De Basanti", "Dangal", "Fanaa", "Talaash"],
  },
  {
    name: "Deepika Padukone",
    image: "https://i.pinimg.com/originals/56/ff/cc/56ffcc6140b53765bd329092ad32c6f6.jpg",
    movies: ["Pathaan", "Goliyon Ki Raasleela Ram-Leela", "Happy New Year", "Bombay Talkies", "Main Aurr Mrs. Khanna"],
  },
  {
    name: "Hrithik Roshan",
    image: "https://i.pinimg.com/originals/b1/fb/45/b1fb45f910c4eca683910ea08694fcff.jpg",
    movies: ["Kaho Naa... Pyaar Hai", "War", "Zindagi Na Milegi Dobara", "Super 30", "Jodhaa Akbar"],
  },
];

class Actor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMovies: [],
    };
  }

  handleActorClick = (movies) => {
    this.setState({ selectedMovies: movies });
  };

  render() {
    const { selectedMovies } = this.state;
    return (
      <div className="container">
        <h1 className="title">Actors List</h1>
        <div className="actors-grid">
          {actors.map((actor, index) => (
            <div
              key={index}
              className="actor-card"
              onClick={() => this.handleActorClick(actor.movies)}
            >
              <img src={actor.image} alt={actor.name} className="actor-image" />
              <p className="actor-name">{actor.name}</p>
            </div>
          ))}
        </div>
        {selectedMovies.length > 0 && (
          <div className="movies">
            <h2>Top 5 Movies:</h2>
            <ol>
              {selectedMovies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ol>
          </div>
        )}
      </div>
    );
  }
}

export default Actor;

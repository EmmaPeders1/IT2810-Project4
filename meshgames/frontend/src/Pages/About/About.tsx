import './About.css';

/**
 * A Funtional component that displays information about the application
 */
export default function About(){
return(
  <div className="about">
    <h1>About the application</h1>
    <p>
      eGAMES strives for further improvements is the terms of accessability.

      <br />
      The application is based on the project 'MeshGames'.
      MeshGames was based on data from the data set at Kaggle.com.
      The data consists of 16 598 games with their ranking, title, publisher, release year, genre, platform and sales in different world areas.
      Multiple games with the same title but on different platforms will be seen as different items.
      <br /> <br />
      The creators of this application takes no responsibility of incorrect data.
    </p>
  </div>
  );
}
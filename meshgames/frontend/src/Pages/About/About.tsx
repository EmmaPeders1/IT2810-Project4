import './About.css';

// About-page with information about the application
export default function About(){
return(
  <div className="about">
    <h1>About the application</h1>
    <p>
      MeshGames is a web application based on data from the data set at <a href={"https://www.kaggle.com/datasets/gregorut/videogamesales?resource=download"}>Kaggle.com</a>.
      The data consists of 16 598 games with their ranking, title, publisher, release year, genre, platform and sales in dfferent world areas.
      Multiple games with the same title but on different platforms will be seen as different items.
      <br /> <br />
      The creators of this application takes no responsibility of incorrect data.
    </p>
  </div>
  );
}
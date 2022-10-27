# Meshlab

## 😃 Members

Developed by:

- Martine Mansåker
- Emma Pedersen
- Sindre Eidskrem
- Hang Celin Le

## :computer: Tech stack

### Backend

- GraphQL
- Apollo server
- Neo4j Database

### Frontend

- React -Typescript

## :arrow_forward: Running the application

In the project directory, you can run the project by typing *npm start* in the terminal.
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.
The page will reload on edits.

Run *npm test* to test the application.

Run *npm run build* to build the application.


## :page_with_curl: Content and functionality

### Content

When starting the application, the user will be at the home-page. 
The home page's main components are a searchbar, three filter options and ten game cards (which is the group's chosen way of presenting the data) with information. The user can scroll to the bottom and click on a button labeled *"Load more..."* which will make ten more cards visible for the user. This process can be repeated until the user is satisfied. The game cards show the title and publisher of the game. The user can click on an icon on the bottom right which will make the card expand and reveal more information. On the bottom left is a heart icon. The game is favorited when the user clicks it, which is communicated through a color change.

The user can also choose which games they want too see. This can be done by searching for a game at the search field and clicking the button labeled *"Search"*. For further precision, the user can filter by *Publisher*, *Platform* or *Genre*. The filters are applied upon clicking the button labeled *"Filter*. The user does not have to have done a search before filtering. The user can also sort the game cards by pressing the dropdown labeled *"Sort by"*. The user can choose to sort the games alphabetically or by the year of release. 

The user can also navigate to other pages by use of the sidebar. At the upper left corner is an icon which will make the sidebar visible to the user. The user can also close it by clicking the same icon. When seeing the sidebar, the user can  click on one of the tabs which will redirect them to the desired page. 




###  Functionality



## :wrench: Technical requirements

The application retrieves data from a csv file found at [Kaggle.com](https://www.kaggle.com/datasets/gregorut/videogamesales?resource=download). The data consist of 16 598 games with information about their publisher, platform, genre release year and sales in different areas. This data is added to a Neo4j database which is connected to an Apollo server. The data is retrieved to the frontend by the use of GraphQL. 

The solution has a responsive web design. Layout, scaling and interaction posibilities are adaptable based on what type of device and screen size. By using CSS flexboxes, all the elements and their contents are visible and available for the user to see and interact with.

# :gear: Testing

Testing is mainly done by explorative testing done by members of the group and fellow students. This is done by giving the students prompts or letting them explore by themselves. The grou pmembers then took notes of where the students had problems understanding or when an unexpected bug appeared. The project also consists of X unit tests and an end-to-end test.

In testing the user interface and responsive design, the group has used the device emaluation in the web browser to simulate the application on a phone screen (vertically and horizontally) and an ordinary PC (big screen) as well as an IPad (medium screen).


# :sweat: In retrospective

In retrospective, we have gained experience and have some thoughts on what we could have done better.



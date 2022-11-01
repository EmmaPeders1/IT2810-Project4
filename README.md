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

When starting the application, the user will be directed to the default page, which is the *"Home"*-page. 
This page consists of a searchbar, three filter options, a sort option and eight game cards (which is the group's chosen way of presenting the data) with information. The user can also see what they searched for in a separate section.

At the upper left corner is an icon which will make the sidebar visible to the user. The bar contains the different pages of the application. The user can close the sidebar by clicking the same icon.

The *"Favorite"*-page looks similar to the *Home*-page. This page stores all the games the user has favorited. If the user has not favorited any games, a simple text is visible. All the favorited games will be visible here, and the group can add filter options, search options and pagination for further improvement. The page has also a button labeled *"Reload"*, which will reload the site. This is due to the fact that the favorization (or defavorization) of a game will not automatically reload the page. The group has decided to use this method as a reload for each favorite would result in the *Home*-page reloading each time (which would not be sustainable as it would do a new query each time).  

The *"About"*-page consists of simple information about the application. 


###  Functionality

The main functionality is the search function. The user can choose which games they want too view. This can be done by searching for a game at the search field and clicking the button labeled *"Search"*. Notice that the functionality is case sensitive, meaning lowecase lettering will not result in an item with uppercase letters. 

For further precision, the user can filter by *Publisher*, *Platform* or *Genre*. The filters are applied when clicking the button labeled *"Filter*. The user does not have to search before filtering. The user can also sort the game cards by pressing the dropdown labeled *"Sort by"*, where one can sort the games ascending or descending (alphabetically). The default sorting is set to ascending. If the filtering or searching results in no games, the user will be informed by a simple text. A known bug, which we decided to abandon in dialogue with student assistants, is the fact that if the user first filters and chooses a sorting, and then wants to sort differently on the same result set, the functionality will not update. In other words, the user must change one of the filter options to make a new sorting.

The application implements pagination. The user can scroll to the bottom and click on a button labeled *"Load more..."* which will make eight more cards visible for the user. This process can be repeated until the user is satisfied or there are no more games to load. The game cards display the title and publisher of the game. The user can click on an icon on the bottom right of the card which will make a pop up appear and reveal more informationa about the game. On the bottom left is a heart icon. The game is favorited when the user clicks it, which is communicated through a color change. 

The user can also navigate to other pages by use of the sidebar. When viewing the sidebar, the user can click on one of the tabs which will redirect them to the desired page. 

To favorize a game, the user can click on the heart icon located on the lower left corner of the game cards.

To switch theme of the page, the user can click on the grey sun icon on the upper right corner located on the header. This icon will toggle between light and dark mode, and swtiches to a white moon on dark mode. The group followed a [guide](https://dev.to/skinnypetethegiraffe/lightdark-mode-toggle-using-mui-and-recoil-ts-3bj0), and did some modifications to make it fit for application. 

## :wrench: Technical requirements

The application retrieves data from a csv file found at [Kaggle.com](https://www.kaggle.com/datasets/gregorut/videogamesales?resource=download). The data consist of 16 598 games with information about their publisher, platform, genre release year and sales in different areas. This data is added to a Neo4j database which is connected to an Apollo server. The data is retrieved to the frontend by the use of GraphQL. 

Use of global state management have been implemented through dark mode with use of Recoil. 

Most of the components, expect for the buttons, are MUI components, as the group saw it appropiate to use this component library.

The solution has a responsive web design. Layout, scaling and interaction posibilities are adaptable based on what type of device and screen size. By using CSS flexboxes, all the elements and their contents are visible and available for the user to see and interact with.

# :gear: Testing

Testing is partly done by explorative testing done by members of the group and fellow students. This is done by giving the students prompts or letting them explore by themselves. The group pmembers then took notes of where the students had problems understanding or when an unexpected bug appeared. The project also consists of 2 unit tests and an end-to-end test. All the test files are allocated in the same folder as the component/file that is being tested. In such a manner, the components being tested are close to the test and the imports are kept short. 

The unit tests have been created using Jest and React's testing library. For example does the unit test GameCard.test.tsx render a GameCard component using mockdata and checks wheter or not the mockdata is displayed in the rendered card. Further it tests that the expand button in the card works and that information is both shown and hidden again when pressing the expand button. The unit test Header.test.tsx makes use of a snapshot to check that the Header component is rendered as expected. 

The end-to-end test is implemented using Cypress. 

In testing the user interface and responsive design, the group has used the device emaluation in the web browser to simulate the application on different phone screens (vertically and horizontally) and ordinary PCs (big screen) as well as IPads (medium screen).

# :earth_africa: Universal accessebility

To adhere to universal accessebility, the application has gone through a color change from lighter to darker colors. Such change makes the constrast between text and background greater, which passes all the tests according to the WCAG guidelines. The placeholders in the input fields does not pass these tests, but this is not changed due to being the default from MUI. The fonts used on the website are easy to read, with no extra distractions. The text is also easily readable, and the group has chosen not to implement a manual font size change due to most web browsers already having this functionality implemented (which is tested to work on our application in Chrome). The buttons also adhere to universal accessability as they change both color and cursor upon hovering, which signals the change to the user. 

# :sweat: In retrospective

In retrospective, the group have gained experience and have some thoughts on what we could have done better. 

Improvements for next time:

- Split the filter and sort functionality to indpendent functions.
- Make the query case insensitive (this is not a feature in GraphQL, but could be implemented by the use of element.lowecased()).

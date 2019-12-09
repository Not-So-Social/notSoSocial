// Pseudo code for Juno Project Six - Not-So-Social-Event-Planner

// Members: Tiffany Wong, Hira Ahsan, Nick Wang, Lewis Brignell

// get event information from firebase
//  save info from firebase into an array of event objects in state
//  render each event object as a list to the page

// on click, allow the details of the selected event to be expanded 
//  upon, along with a list of shows running on that day.
// the show list allows the user to filter by genre.

// user clicks generate not-social-plan button, which generates the 
//  final result dashboard displaying the social event, along with
//  which shows they'll be watching instead.

// in App.js:

componentDidMount() ✅
// firebase data is retrieved and saved to event objects in state

displaySocialEvents()
// renders event objects in state to the page as a list of clickable items

getDay() ✅
// when user clicks on an event item, save its date to state

getShows() ✅
// based on the day currently saved in state, make an API call
// to retrieve the shows airing then.
// save the returned data to state as an array of show objects

displayShows()
// display the show objects saved in state to the page as a list
//  that includes a 'filter by genre' option

filterShows() ✅
// when the filter genre option changes, return only the shows 
// that match the filtered genre

generateDashboard()
// when clicked display a 'dashboard plan' of what the user
//  was supposed to do, along with an 'itinerary' of what they 
//  be staying home to watch instead.

render()
// displays content to the DOM




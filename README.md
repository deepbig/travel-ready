The purpose of TravelReady is to prepare a user for a trip, including transportation, lodging, and travel conditions. The user can also calculate the total cost of the trip based on their travel plans. 

A user can begin by registering via the Registration window. 
Once registered the user can login to their account via the Login page. A user does not have to login or register to use the TravelReady application. However, if they'd like to save their travel information and return to it at a later time*, they will need to register. 

Registration Class requests the following from the user: name; a username; email; phone number; date of birth; user address; user password. The user must create a password and accept the terms and conditions of the app before submitting their information. They also have the option to reset their information prior to submission. 

LoginFrame Class requires a username and password to access the user's account, such as their itinerary and trip information. The user will be able to modify, delete, or add to this information at any time. 
Temporary Login: 
	userName = Test
	password = 1234@.
Otherwise, it will print "No User on File. Please Register". If this is the case, the user will have to open the Registration window and input their information to login. In registration, 

If the login is correct, the user will be transferred to the LoginHome, and user will be prompted to continue to UserDestination. 

Both guests and account users can use the application by opening UserDestination. Here the user can begin by typing in their place of stay. The user will save this data by clicking the Save button. This information will be displayed, and it will be saved to the User database. 

After choosing Destination, the window will prompt the user to choose the dates of stay. 
Click "Next choose your dates of stay"

"How long are you planning to stay?" is the UserStay window. 
The user can select the dates of stay: the start dates are entered first, the end date is entered second. The user can save these dates for an output and they can change the dates to reset the output. From UserStay, they have the choice to view travel conditions for the today's dates. TravelConditions can be viewed via the image.jpg once the button is clicked. 
The user can return to destination page if they want to change their destination, or they can click "Next..." To access the UserTransportation page. 

In "How will you get there?" Of UserTransportation, the user has the option to choose travel by plane or travel by car whether that is a rental car or their personal vehicle. 

"Click here to see Flight Prices" will take user to Google Flights website (this was meant to be an API, but I couldn't afford the API key). 

Click "Calculate mileage cost", and the user will be redirected to CalculationCost where they can input their gas and mileage. The window will then calculate the total cost. The user can then input this number into their itinerary later, or they can erase the information and input new numbers to calculate. 

Click "Next, choose lodging...", and the user will be directed to a page that allows them to choose their lodging. 

In UserLodging, the user can click "options". This will direct the user to Expedia to view hotel options for the user to choose from. 

Or the user can click "view your itinerary". The itinerary is a table that implements all of the data based on the User class and data inserted into the database as the user moves through the JPanels. In this table, the user can modify, add, and delete data from each row. When they enter/edit the data, it will automatically save the user data to the database*. 

From the itinerary the user can choose to return to any window by clicking any of the buttons on the bottom of the table. 

At anytime the user can exit out of the screen by clicking the red X in the top left hand corner, then they will need to begin with the LoginFrame again. 

*Certain limitations prevented me from implementing my database (which I addressed in my summary), so the user information cannot be saved. Therefore, I created a temporary table with data for this presentation.





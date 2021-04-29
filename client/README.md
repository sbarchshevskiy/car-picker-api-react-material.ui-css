#Car Info from NHTSA

###Description:

The National Highway Traffic Safety Administration (NHTSA, pronounced "NITZ-ah") is an agency of the U.S. federal government, part of the Department of Transportation. It describes its mission as "Save lives, prevent injuries, reduce vehicle-related crashes" related to transportation safety in the United States.

As part of its activities, NHTSA is charged with writing and enforcing Federal Motor Vehicle Safety Standards as well as regulations for motor vehicle theft resistance and fuel economy, as part of the Corporate Average Fuel Economy (CAFE) system. FMVSS 209 was the first standard to become effective on March 1, 1967. NHTSA also licenses vehicle manufacturers and importers, allows or blocks the import of vehicles and safety-regulated vehicle parts, administers the vehicle identification number (VIN) system, develops the anthropomorphic dummies used in U.S. safety testing as well as the test protocols themselves, and provides vehicle insurance cost information. The agency has asserted preemptive regulatory authority over greenhouse gas emissions, but this has been disputed by such state regulatory agencies as the California Air Resources Board.

##About the App
This app should allow user to lookup any automobile, and see history of recalls, theft factors, insurance risks and costs, energy consumption, measurements as well as a coefficient of environmental impact.

#Development:

## TODO's
###Responsive Design
- search bar placement varies in relation to header depending window height.
- search bar overlaps window width below 300px
- search bar select mode has rectangular shape whereas actual form has border radius.
- search bar placeholder font is too close to the edge

###Functionalities
- autocomplete feature doesnt work, however no results are given if the name wasn’t entered properly.
- search results render cards the equivalent amount of items search criteria contains. Should have only one.
- the ❎ button does not close anything but it could be used to reset the *state* back to `null`
- close button needs to be adjusted at the top right corner, occupying 25% of its shape inside the form.
- loading times while fetching `make` or `model` should displayed as a spinner to let user know that data is taking time to fetch.
- `see complete list` doesn’t deploy as required by client. A scrool bar implemented to show the enitre model list.
- code could be refactored using *helper functions* instead of coding inside the jsx.
- *custom hooks* can be implemented to make code understandable.
- only one (1) API call would be sufficient to make the app work.

####Screen captures as of APR 28, 2021

![Screenshot](/screenCaptures/p1.png)
![Screenshot](/screenCaptures/p2.png)
![Screenshot](/screenCaptures/p3.png)





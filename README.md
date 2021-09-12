### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### https://dazzling-wind-cave-58577.herokuapp.com/login

This is the online link, that is up to date with the git repository

<!-- HOW TO USE UG BILL -->

Sign In or Log In First: With email and password fields are required.
Confirm password for sign In.

To create a bill you need to have a certain client whom you are the bill for. Therefore you will be required to create a new client in case you try to create a bill without a client.

If you have a client created, you can create a bill through 2 ways:

1.  Go to schedules and choose which type of bill you want to create.
    (i) You will have to choose which client owns this bill in the about section.
    (ii) You will be required to enter all details as they are required/but for dev purposes, this validation is not yet activated.
    (iii) Hit submit which will redirect you to your output.
    (iv) Hit Save Bill data to finish saving which will take you to all reports/bills routes where all bills are displayed and Delete / Update links are available on this page and active

2.  The second is hit the blue plus button in the reports/clients page.
    This button will choose the specific client of the plus button to be your specific client to own that bill.
    Then follow the rest of the steps from (ii) in Option 1.

### REPORTS ROUTE

      This route displays links for the bills, clients, advocates created by the Company admin.
      To access any just click on that specific field.

### SCHEDULES ROUTE

      This route displays all Types of bills that can be created after all, these bills will be schedules for a certain company advocates to follow up given that these will be added on the calendar feature which is not added.

### ADDITIONAL COMPLETE FUNCTIONALITIES

1.  The clients table is searchable.
2.  CRUD operations on clients and bills are all active
3.  Dynamically disabled submit buttons

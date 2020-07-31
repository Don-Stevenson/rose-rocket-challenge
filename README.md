# Rose Rocket Challenge Front End
The challenge I set out was to build a working dispatch site to create, update and delete driver tasks.  I needed to be able to make a drop down to display only a current drivers tasks. I needed to create a CSV file based up the driver and for intervals of time (2, 4 days, 1 week and 28 days)

I used react-calendar-time-line to render a driver's schedule and used semantic-ui cards to handle displaying / CRUD of task details. 

I really enjoyed working on this project; I learned a ton and was able to accomplish a lot more than I thought I could!

Hindsight being 20/20, I realize that I bit off more than I could chew in terms of handling real dates / calendars and the complications that arrise from that. That said, I am stand behind my decision to try something more difficult because I learned more that way.


### Things I am really proud of!
- I learned to use a ton of new libraries! e.g. react-calendar-timeline, moment, date-fns, react-json-to-csv, semantic-ui, etc.
- Using a reducer to handle the state (it's been a while)
- I chose to handle real dates and display them in a calendar timeline. This was tough, and I am really pleased that I was able to work and use actual dates.
- Getting a server up and running that persists data!
- Tackling a full stack project for the first time by myself with minimal input from others
- Getting some styling done.
- Making some decent docs that explain how to install and run this project
- Getting a friend to install the project sucessfully by only using the docs I worked on.
- Getting a sense of accomplishment and joy for what I was able to complete in a week!!!


### If I had more time (in no particular order) ...

- Calendar Timeline doesn't auto update upon delete a task.  It requires a refresh of the browser. This is certainly fixable within react.
- Impliment the logic in the createDriverCSV helper to render the CSV file for the selected driver
- Impliment logic to display drivers tasks and calendar timeline by last name instead of by task 
- Spend more time on the styling and design, especially for mobile
- Make / Import more helper functions to clean up the code further
- Add maps to the destinations for dispatchers or drivers
- Take in drivers phone numbers and send out taks addresses and maps via twillio or other sms service
- Handled click and drag tasks in the calendar that auto updates the task times
- I could have refectored my code more.

### Bugs
- Bowser may require a resize before the react calendar timeline renders the individual tasks - works fine on Mac's, not so well on linux systems
- react calender seems extra finicky with scolling and resizing, would have liked to have solved that

### Rose Rocket Front End Looks like:
![Main Page - after adding 4 Driver Tasks](https://github.com/Don-Stevenson/rose-rocket-challenge/blob/master/public/docs/Main%20Page.png)

![Individual Driver Calendar Time Line and Task](https://github.com/Don-Stevenson/rose-rocket-challenge/blob/master/public/docs/Individual%20Driver%20Task.png)

![Add New Driver Task](https://github.com/Don-Stevenson/rose-rocket-challenge/blob/master/public/docs/Add%20Driver%20Task.png)


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

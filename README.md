# Notice!!

This is the final version of the buddy exercise.
Please note the following information

- Both vanilla CSS and tailwind css as used for styling
- Shadcn UI components are used
- The dashboard subroutes are protected and lazily loaded with React Suspense
- The graph on the dashboard cannot be styled to look exactly as in the UI (the hover state) because the Shadcn UI chart component was used to render the graph. Shadcn Ui chart component has little cutomizable features on hover. Hence, I opted to use solid colors for the bars in the graph
- A token (generated on login) is required to access the protected routes.
- The token is stored in session storage while the user information is stored in local storage.
- The otp for verification is autofilled on the otp verification page. This is bacause the otp is part of the response object on account creation and is not sent to the email used for account creation. Please interact with the otp input field to enable the "Confirm OTP" button.
- No state is managed throughout the application. This is because there aren't much state to be managed. The user info and access token are retrieved from the browser storage whenever needed.
- Minor changes were made to the UI on small and medium screen devices for responsiveness. This is to make the application a little bit usable on small and medium screens
- The messages functionality was not simulated with local storage as advised in the instruction. This is because I thought there will be no need for the sent messages to be persistent since no replies will be gotten. A user can send messages nonetheless, as the messages are stored in an array. However, default messages are restored on page reload.

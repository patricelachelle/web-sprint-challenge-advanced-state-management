# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?

Since in normal React applications data is passed top-down via props Context API allows for data to be passed between components without having to pass it through props. Context API is used when there is global data that several components need to share. The API keeps the state of the application clean.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The store in an application contains the global state for the application.  Everything that changes within components is still based on the original object called the store. 

The action in Redux is an object with up to two properties, a type and a payload. The type is required and it explains what interaction is to happen such as LOGIN or TOGGLE. 

The reducer receives the action and updates the state according to the action type and if included the payload. 

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

Redux-thunk allows for the flow of data to be made asynchronous and it makes API calls from our action creators.

4. What is your favorite state management system you've learned and this sprint? Please explain why!

I like Context API because passing props is somewhat messy for me and when there are several components it just seems to make sense to use Context API.
## 💫 Overview
I made use of JavaScript, HTML5 and CSS to actualize this project. I used JavaScript to call the functions which I assigned to the HTML button elements using the "onclick" attribute. 


## 🧑‍💻 How The Code Works
### 1. Primary Buttons:

  Each HTML button representing a number or a symbol for an arithmetic operation is categorized as a primary button and assigned with an input inside their onclick function

    Example; onclick="toDisplay(4)"

    OR 
 
    onclick="toDisplay(+)"

  This HTML input/argument is then fed to the argument of the JavaScript function when I call it in the JavaScript code. 

  
### 2. Secondary Buttons:
The are also known as the special buttons and are used to clear or delete user input, add more context to user input by using parenthesis or displaying the result of an operation, and will be discussed in this subsection;

    i) The clear button (C);
An onclick attribute is assigned to this button element which doesn't take any argument because the function of this button is to clear the user's input, hence nothing is being added to the existing input. 

    ii) The delete button (del);
The function assigned to this button element doesn't take any argument and is used for deleting the most recent user input.

    iii) The parentheses buttons;
This button simply inserts an opening or closing parenthesis in the calculator's display when its function is executed.

    iv) The "equal to" button (=); 
This button is used to check if the user's input is null and display result of an operation when its function is called. I used the "try" and "catch" syntaxes to ensure math errors are detected and to inform the user about such errors. Inside the "try" command, the user's input is evaluated first before error detection (if any), using the "eval" syntax to compute the operation on the calculator's display. 


### 3. Storing Answers:
In order to store the answer generated from an arithmetic operation, I simply nested an "if" command inside the function for displaying answers. This ensures that when the user clicks the "=" button the generated answer will be stored in the history.


The "if" command checks whether the answer or result of an (or a supposed) arithmetic operation does not yield a "Null" or "Math error" output before updating the history. 


The history is updated using ".innerHTML". Every time a valid answer is generated, a counter is updated by an increment of 1 and when it reaches 20 (max limit for answers stored in history), the history stops storing answers. 


The counter is incremented inside the "if" command and the condition checks if the counter variable is less than or equal to 20. 


### 4. Copying and Deleting Answers:
  Copy;
I included a function for copying all the answers in the calculator's history and also providing a visual feedback when the copy icon is clicked.

  Delete;
The stored answers can be deleted when the delete icon is clicked. This will reset the counter and clear the answers stored in the history. 


## 🧩 Challenges
I encountered very minimal problems, with one in particular which stood out from the basic or common problems associated with building a project of this scope. 

This particular issue had to do with the "del" button which is meant to delete the most recent input. At first, I made several logical errors which prompted me to find the causation of each and after several iterations of detecting these bugs, I eventually fixed each of them which led to the successful implementation of the delete button. This enhanced my understanding of JavaScript functions assigned to html elements.

I made use of bindings (variables) which enabled me to store and convert the user input to a string, and use the "slice" method to slice (delete) the most recent input. 


## 🌈📱 User Interface
1) Theme - light text on dark background and vice versa 
2) Buttons - finger-friendly rounded edges 
3) Visual feedback - css transitions 


## 🥂 Stack
1) HTML
2) CSS 
3) JavaScript 


## 📦 Dependencies
1. FontAwesome 

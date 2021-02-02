# G5 Basic JavaScript Class 11 Tasks:

## Rules, Info & Common Q&A:

0. This is NOT an official TEST, it is input for the trainer and assistant so that they would be able to see your progress during this course and take that in consideration for the Advanced JavaScript course.
1. **Do not use Higher Order Functions** like .split(), .join(), .filter(), .reduce() or any other we haven't used in during this course. 
2. jQuery is not banned but it would be more appreciated if you use plain JavaScript.
3. Feel free to **use google** or any other website as much as needed to do the tasks.
4. Consulting colleagues is not forbidden, but try to do your own task without copying someone elses work. There is huge difference in consulting and just copying.
5. Using function parameters is optional, feel free to decide if you should use it somewhere or not(you know when you need one from the last class discussion).
6. The three dots represent place where code should be written and they should be removed.
7. The already written code for each task is just a placeholder to help you start, if you think is not right, feel free to remove it completely.
9. Our solutions will be added on our groups github repo after all students from each group have finished the tasks.
10. The Trainer and Assistant can help you and answer questions but can't provide solutions or major hints for the tasks.
11. Finished tasks **should not be shared publicly** in the chat!
12. There are **no official breaks**, come and go as you please. The trainer and assistant will coordinate to make sure at least one person is always available for answering questions.
14. **You should send us your code by github when you are done or when the class ends, 21:15 at latest. Do not change anything afterwards.** You can add all the code in a single file or have multiple, as you wish, just make a clear distinction of which task is which.

There is no need for stressing out, as there will be no grades, just feedback similar to what you get for the submitted homeworks. Also there is no passing and failing. Try to do your best and send us your work even if it is not finished.

Send finished work to:
- Martin Panovski - panovski.martin93@gmail.com
- Angela Kostadinova - angelakostadinova7@gmail.com

## Tasks:

### Exercise 1 - Create array of string lengths:
Create a javascript function that will create a new array that will be consisted of elements which are the **lengths** of the elements in the already given array of names.
let namesArray = ["Bill", "Ana", "Josephine", "Elena"];
let namesLengthArray = [];

```
function mapToArrayElementsLength(...) {
    // Code goes here...
}
console.log(namesLengthArray);
```

### Exercise 2 - Divide by 7 and 3:

Create a function that will find and return an new array of all numbers dividable by 7 **AND** 3 in a array from 1 to 100.
If a number is ONLY dividable by 7 it should NOT be part from that array.
If a number is ONLY dividable by 3 it should NOT be part from that array.
Bonus: make the function work to any number instead of only to 100.

```
let num = 100;

function getDividableNumbers(...) {
    //Code goes here...
}
```

### Exercise 5
Write a javascript function that will serve as an online phone book. You need to give the user an option for storing new contacts and display them in a table. Each contact is consisted of firstName, lastName, phoneNumber. They request from you to allow them insert the inputs through an input fields that are part of a form. If the contact is saved successfully it needs to be displayed in a table. below the register form after clicking on the Add button.
###### - Use of functions will be appreciated, but focus on making it work first
###### - Use the provided HTML, it is a boost for save some time and focus on JS only
###### - Make sure the contact is created as an object
###### - Try to store each new contact in an array after adding new one

```
<h1>Contacts keeper</h1>

<form action="" method="POST">
 <fieldset>
  <legend>Add new contact:</legend>
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname"><br><br>
  <label for="phone">Phone number:</label>
  <input type="text" id="phone" name="phone"><br><br>
  <input type="submit" value="Add" id="saveBtn">
 </fieldset>
</form>

function displayContacts(...) {
  // Code goes here...
}

function addNewContact(...) {
    // Code goes here...
}
```

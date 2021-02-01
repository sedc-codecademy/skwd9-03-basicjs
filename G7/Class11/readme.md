# G7 Basic JavaScript Class 11 Tasks:

## Rules, Info & Common Q&A:

0. This is not an official test, even though it will be done in a similar way so that the academy (the trainer and assistant as representatives) would be able to see your progress during this course and take that in consideration for the Advanced JavaScript course.
1. **Do not use Higher Order Functions** like .split(), .join(), .filter(), .reduce() or any other we haven't used in during this course. If you do, the whole task will be considered as invalid, as that would mean using a shortcut and missing the point of the task.
2. jQuery is not banned but it would be more appreciated if you use plain JavaScript.
3. Feel free to **use google** or any other website as much as needed to do the tasks.
4. Consulting colleagues is not prohibited, but try to do your own task without copying someone elses work. There is huge difference in consulting and just copying. Copied code is easily noticeable (just like in the homeworks) and if seen, we will compare time of submission between the students.
5. HTML and CSS are not necessary for completing these tasks, you should **only use JavaScript**.
6. In these cases we are not worried about having everything in the global scope, so the main goal is just getting the proper result in most efficient way possible (but still considering rule no. 1)
7. Using function parameters is optional, feel free to decide if you should use it somewhere or not.
8. The three dots represent place where code should be written and they should be removed.
9. The correct solutions will be added on our groups github repo after all students from each group have finished the tasks.
10. The Trainer and Assistant can help you and answer questions but can't provide solutions or major hints for the tasks.
11. Finished tasks **should not be shared publicly** in the chat.
12. The already written code for each task is just a placeholder to help you start, if you think is not right, feel free to remove it completely.
13. There are **no official breaks**, come and go as you please. The trainer and assistant will coordinate to make sure at least one person is always available for answering questions.
14. **You should send us your code by github when you are done or when the class ends at 20.45. Do not change anything afterwards, no commits after 21.00 will be considered in the feedback.** You can add all the code in a single file or have multiple, as you wish, just make a clear distinction of which task is which.

There is no need for stressing out, as there will be no grades, just feedback similar to what you get for the submitted homeworks. Also there is no passing and failing. Try to do your best and send us your work even if it is not finished.

Send finished work to:
- Ivo Kostovski - ivo.kostovski@gmail.com
- Ivan Lazarevski - ivan.lazarevski@seavus.com

## Tasks:

### Exercise 1 - Map numbers to string with dash:

Create a function which accepts an array of numbers as parameter and inserts dashes (-) between EACH two EVEN numbers.
Example: When called with 0,2,5,4,6,8 the output should be 0-254-6-8 (as a string).

```
let array = [0, 2, 5, 4, 6, 8];

function mapToEvenNumbersWithDash(...) {
  ...
  return ...;
}
```

### Exercise 2 - Divide by 7 and 3:

Create a function that will find and return all numbers dividable by 7 AND 3 in a array from 1 to 100.
If a number is ONLY dividable by 7 it should NOT be returned.
If a number is ONLY dividable by 3 it should NOT be returned.
Bonus: make the function work to any number instead of only to 100.

```
let num = 100;

function getNumbers(...) {
    ...
  return ...
}
```

### Exercise 3 - Vending machine:

Write a program for a vending machine that will calculate how much coins should be returned depending on the change.
You have the following coins available: 50, 20, 10, 5 and 1
Example: if the change is 376, the result should be [50, 50, 50, 50, 50, 50, 50, 20, 5, 1].
Bonus: Make the program work with limited amount of coins of each value (ex. 5 - 50 coins, 8 - 20 coins, etc.)

```
let input = 376;
let coins = [...];

function changeCalculator(...) {
  ...
  return ...;
}
```

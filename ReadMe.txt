Important concepts to learn for Data structures

1. DFS (Problem related oto City to City, Uses Stack, It is also Pre-Order Traversal of a tree)
2. BFS  (Level Order traversal of a tree, uses Queue)
3. Matching Bracket Problem - If Brackets are correctly closed - Using Stack makes it easier
4. Use Hash Tables - Used for (Already visited nodes, for cahching already calculated values)
5. Manipulating multple variables E.g. longest pallendrome substring in a substring, Reversing a Linked List
6. Sorting Fundamentals, Know the runtime for diff Algos
7. Recursion
8. Binary Search(Works on sorted list, split the list everytime and search), Complexity logn

Problems asked so far
1. Second Largest number
2. Factorial of a very large number (hacker rank) - Idea is
 to multiply numbers by ourself with algo as too big numbers are not supported in JS
3. https://www.geeksforgeeks.org/sum-numbers-formed-root-leaf-paths/
        6
       /      \
     3          5
   /   \          \
  2     5          4  
      /   \
     7     4
  There are 4 leaves, hence 4 root to leaf paths:
   Path                    Number
  6->3->2                   632
  6->3->5->7               6357
  6->3->5->4               6354
  6->5>4                    654   
Answer = 632 + 6357 + 6354 + 654 = 13997 

4. Given a tree with each node's value(data field of node) as count of its child. 
Consider n as input passed, return the node which falls at nth index  positon in the Post_Order traversal of the tree
5. How to find the n-th level of a node(Level of root node is 0) from the root if "node value" is given 
6. How to make a AVL tree 'balanaced'?  Left Right rotation, Right Left rotation, etc 
7. Remove duplicates from an array?
8. Print all paths of a tree
9. Sub Array Sum (DP)
https://www.geeksforgeeks.org/subset-sum-problem-dp-25/

10.Find Maximum number possible by doing at-most K swaps 
https://www.geeksforgeeks.org/find-maximum-number-possible-by-doing-at-most-k-swaps/

11. All Pair of values with Sum  as X in an array (Optimized code)

12. Return if a string can be made pallendrome by swaping digits, or, Count minimum swap to make string palindrome
https://www.geeksforgeeks.org/count-minimum-swap-to-make-string-palindrome/

12. Stack from 2 Queues
13. Min swaps required to make the set of brackets in right order?
14. Length of the longest substring without repeating characters (Agoda)
14. Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts
15. 
16. Indexed Tree or Fenwick Tree
17. Longest Pair sum
18. Questions asked from Kanishk in Adobe interview - 
    i. Platforms on Bustand problem
    ii. How to check if a tree is a binary tree
    iii.LLD of Payment Gateway
    iv. Design your own API (Asynchornous, Interface, HTTP methods )
    v. How to add Binary Numbers via code
19. Questions asked from Chandra in Microsoft interview - 
    i. Egg Dropping Problem
    ii. Longest pallendrome
    iii. LLD of Parking lot
    iv. Minimize cost of painting N houses - 
    https://www.geeksforgeeks.org/minimize-cost-of-painting-n-houses-such-that-adjacent-houses-have-different-colors/
    
    Other questions on System Design
    iv.  Add To Cart  - LLD, HLD
    v.   How to create ECommerce website
    vi.  Design a Push Notification module - (Can be part of BookmyShow, Twitter, etc)
    vii. Design BookMyShhow 
    viii.Design PArking lot

20. 20. https://tutorialhorizon.com/algorithms/given-an-array-find-the-number-of-all-pairs-with-odd-sum/

21. LC: 2342. Max Sum of a Pair With Equal Sum of Digits 
https://leetcode.com/problems/max-sum-of-a-pair-with-equal-sum-of-digits/description/

22. LC: 3
https://leetcode.com/problems/longest-substring-without-repeating-characters/

23. Integer to Roman 
https://leetcode.com/problems/integer-to-roman/description/

24. Find the middle character(s) of a string
https://stackoverflow.com/questions/63269896/c-sharp-best-way-to-find-the-middle-characters-of-a-string
https://www.w3resource.com/csharp-exercises/string/csharp-string-exercise-49.php

25. How to divide an unknown integer into a given number of (almost) even integers
https://stackoverflow.com/questions/56107612/how-to-divide-an-unknown-integer-into-a-given-number-of-almost-even-integers
https://stackoverflow.com/a/56107897/739990


26. Maximum games played by winner
https://www.geeksforgeeks.org/maximum-games-played-winner/

27. House of Cards
https://www.geeksforgeeks.org/number-of-cards-needed-build-a-house-of-cards-of-a-given-level-n/
Variant Given number of cards find number of houses that can be formed with maximum height possible(See "screenshot" folder for question)

28. Binary to Decimal and Decimal to Binary
https://dotnettutorials.net/lesson/binary-to-decimal-conversion-in-csharp/
https://www.tutorialspoint.com/Chash-Program-to-Convert-Binary-to-Decimal


How to prepare from Chandra
System Design:
Application types- Read, Write, Mixed, Video Streaming, Messaging,Caching etc. Total 5-7 types  Understand all types
    1) Example of Read type - Google Map
    2) Example of Caching with Write - Twitter (understanding how syncing will work)
    3) Example of Mixed - BookMyShow, Travel sites (Understand how locking of tickets)

Design of Uber/OLA, Design of Google map, Snake and Ladder, Chess, Twiiter/Facebook/Instagram, Netflix (Video streaming)   - Understand both LLD and HLD of these. 

HLD - How will you create modules, Which database should be used and why(what problem will occur if differnt db used),where Elastic Search and why, where to apply Queuing, where to apply Push Notification, Why KAFKA why not RabbitMQ- If RabbitMQ you wud have applied what problem would you have faced.

LLD - How to create Classes, what level of inheritance will be used, Where to use Abstract Class. Sometimes asked to execute as well like for Snake and ladder(Dice Random)

Design a distributed task scheduler 
 Design a distributed task scheduler capable of executing long running tasks by dividing them into multiple smaller unit of work and executing them parallely on multiple nodes. 
● Scheduler must be capable of the following: 
○ Distributed - Ability to run on multiple nodes 
○ Fault tolerant - If a node goes down, the jobs should not be impacted and must resume from the last known checkpoint. 
○ Parallel - The scheduler must have ability to run multiple jobs at the same time with minimal wait time. 
○ Horizontal scale - The scheduler must be capable of scaling up or scaling down horizontally and the same be implemented gracefully (especially in case of scale down) 
● Task - is typically a long running unit of work that could span minutes or hours. ○ Master Task 
■ The master task can either be scheduled or invoked ad-hoc. 
■ The master task will be created based on a template that defines the skeleton of the work to be done. 
■ When the master task is invoked, the caller will provide appropriate variables to be replaced in the placeholders of the template to form an instance of the master task. 
■ The scheduler must ensure that master task is triggered exactly once. 
■ The role of the master task is to simply resolve placeholders and the implementation should have a strategy to reduce the task into 
manageable units of work that can be picked up by the Child Task. 
■ The master task must create Child Task(s) with required task data required to execute them. 
○ Child Task 
■ The Child Task is the smaller & manageable unit of work that can be executed parallely. The master task must ensure that child task are not interleaved & can truly run parallely without requirement of any synchronization. 
■ Once all child tasks have finished execution, the scheduler must ensure that master task has also been marked as success/failure.-

Ask Questions as well with the interview








// Data Structure Questions asked to Chandra

17. Minimize cost of painting N houses such that adjacent houses:
https://www.geeksforgeeks.org/minimize-cost-of-painting-n-houses-such-that-adjacent-houses-have-different-colors/

18. ways to paint the paintings such that no two consecutive paintings have the same colors
https://www.geeksforgeeks.org/ways-to-paint-n-paintings-such-that-adjacent-paintings-dont-have-same-colors/

19. Maximum profit by buying and selling a share at most 2 times (or k times)
https://www.geeksforgeeks.org/maximum-profit-by-buying-and-selling-a-share-at-most-k-times/

20. Diameter of a Binary Tree
https://www.geeksforgeeks.org/diameter-of-a-binary-tree/

21. Longest Palindromic Substring
https://www.geeksforgeeks.org/longest-palindrome-substring-set-1/

22. LRU Cache Implementation - Can go further with "How to design cache like redis with heiararchical keys"

23. Priority Queue

24. Length of the longest substring without repeating characters (Agoda)

25. Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts

26. Rotate a number 180 degree (https://leetcode.com/problems/rotated-digits/)  Uber

26. Trie implementation with regex search

27. The celebrity Problem:  https://www.geeksforgeeks.org/the-celebrity-problem/ 

28. kth Largest number (Quick sort)

29. Trie structure - regex

Print all string which contain 'A' and 'C' print karwa do...Trie banake dega
aise String 2 charcter repeat, email text...sarre...

30. https://www.codinginterview.com/adobe-interview-questions 

31. 𝗧𝗼𝗽 𝗿𝗲𝗰𝗲𝗻𝘁 𝗠𝗶𝗰𝗿𝗼𝘀𝗼𝗳𝘁 𝘁𝗮𝗴𝗴𝗲𝗱 𝗖𝗼𝗱𝗶𝗻𝗴 𝗤𝘂𝗲𝘀𝘁𝗶𝗼𝗻𝘀 𝗼𝗻 𝗟𝗲𝗲𝘁𝗖𝗼𝗱𝗲
1. Sign of the Product of an Array (easy)
2. Find N Unique Integers Sum up to Zero (easy)
3. Number of Islands (medium)
4. Boundary of Binary Tree (medium)
5. Longest Happy String (medium)
6. Merge Intervals (medium)
7. Merge 'K' Sorted Lists (medium)
8. Minimum Time to Make Rope Colorful (medium)
9. Course Schedule (medium)
10. Minimum Meeting Rooms (medium)
11. Reverse Nodes in k-Group (hard)
12. Alien Dictionary (hard)


Coding tips
1. Keep variable names descriptive
E.g.
var x=1;              - wrong
var if ElementExists  -- right

2. Keep your code refactored- rather than writing one big sinle function- Divide logics into separate 
function modules

3. Keep if conditon appropraite
Wrong
if(z==1333 && k==112 ||  t=3)

Right:
const isPassingGrade= (z==1333 && k==112 ||  t=3);
if(isPassingGrade){

}
Basically we are keeping long conditions ina a varable and than putting that variable in if clause

4. Use built in methods and be hands on.  
E.g.:
i. Declaring and passing 2-D arrays.
ii. String manipulation functions e.g. Splice, Substring etc.
iii. Math functions e.g. Math.floor, Math.round etc.




TIPS to crack Big Companies Interviews
https://www.quora.com/Is-practicing-500-programming-questions-on-LeetCode-HackerEarth-etc-enough-to-prepare-for-a-Google-interview



1.  Knowledge and Understanding of fundamental Data Structures and Algorithms:

Brush up on data structures and algorithms.
- Arrays and strings, bit hacks, dynamic programming, graphs, hash tables, 
- Linked lists, math problems, priority queues, queues, recursion, sorting, stacks, trees, and tries

Revise Big-O for most commonly used algorithms. No one is going to ask you to implement an algorithm verbatim but it’s better to remember things like

1. What’s the difference between Merge Sort and Quicksort. Which one is better in what case?
2. What’s a stable sort?
3. What’s a Heap?
4. What’s a HashTable and what are the common collision resolution techniques?
5. What’s is a PreOrder, InOrder, PreOrder, LevelOrder traversal?
6. What’s Breadth First Traversal and Depth First Traversal?
 
 Go through 80 problems on 
 Grokking the Coding Interview: Patterns for Coding Questions - Educative

 For Design patterns, follow this channel- https://www.youtube.com/watch?v=tDxnyop48mY


2. It’s very important to focus on learning the basics of distributed systems and then learn how to design large scale distributed systems based on the constraints provided to you. If following topics seem alien to you, you have to learn and practice

Capacity planning,
Stateless servers,
SQL vs. NO-SQL
Distributed Queues
Blob Storage
Consistency models (Strong consistency vs. Eventual Consistency).
Again, it’s not a comprehensive list but if you are struggling with topics like these, you would struggle in your interviews. I would recommend looking at Grokking the System Design Interview to get a detailed overview of System Design fundamentals and problems like Design Instagram, Design Youtube, Design Uber etc.

Systerm Design
https://github.com/donnemartin/system-design-primer


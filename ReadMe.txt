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
    ii. LRU Cache
    ii. Decode String LC: 394 (https://leetcode.com/problems/decode-string/)
    iii. Height of tree 
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
    ix.  Design a system to track the number of people in a building
    x.  Design a billing system like AWS - https://mecha-mind.medium.com/system-design-billing-system-844047e916ff
    

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

29. Check whether three given integer values are in the range 20..50 inclusive
https://www.w3resource.com/c-programming-exercises/basic-algo/c-programming-basic-algorithm-exercises-8.php

Alation
30. Find Permutations of a string

31. Find Cycle in a Directed Graph 
https://www.geeksforgeeks.org/find-whether-it-is-possible-to-finish-all-tasks-or-not-from-given-dependencies/

32. Majority Element
https://www.geeksforgeeks.org/majority-element/
Check Moore’s Voting Algorithm

33. Version compare problem
https://www.geeksforgeeks.org/compare-two-version-numbers/


34. You are given an array A consisting of N integers within the range [1 ..N]. In one move, you can increase or decrease the value of any
element by 1. After each move, all numbers should remain within the range [1 ..N]. Your task is to find the smallest required number of moves to make
all elements in the array pairwise distinct (in other words, no value can appear in the array more than once). Write a function in c#:

class Solution { 
public int solution( int[] A);
}

that, given an array A consisting of N integers, returns the smallest number of moves required to make all elements in the array pairwise distinct. If the result is greater than 1,000,000,000 the function should return -1.


35. You are given a map of the Roman Empire. There are N + 1 cities (numbered from O to N) and N directed roads between them. The road network is connected; that is, ignoring the directions of roads, there is a route between each pair of cities.
The capital of the Roman Empire is Rome. We know that all roads lead to Rome. This means that there is a route from each city to Rome. Your task is to find Rome on the map, or decide that it is not there.
The roads are described by two arrays A and B of N integers each. For each integer K (0<= K < N), there exists a road from city A[K] to city B[K].
Write a function in c# language:

class Solution {
public int solution (int[] A ,int[] B);
}

that, given two arrays A and B, returns the number of the city which is Rome (the city that can be reached from all other cities). If no such city
exists, your function should return -1.

Examples:
1. Given A = [1, 2, 3] and B = [O, O, 0] the function should return O. Rome has the number O on the map.

2. Given A = [O, 1, 2, 4, 5] and B = [2, 3, 3, 3, 2], the function should return 3. Rome has the number 3 on the map. From cities 1 , 2 and 4 there is a direct road to city 3. From cities O and 5, the roads to city 3 go through city 2.

3. Given A = [2, 3, 3, 4] and B = [1,1,0,0], the function should return —1. There is no Rome on the map.



36. You love playing with LEGO blocks. Initially, you have N towers of different heights. As you look at the towers, you think they would look more beautiful if all of them had the same height. However, you can only increase (if necessary) the height of a tower. 
Given the initial representation Of the towers, your task is to determine the minimum number of blocks you will need to make all the towers of the same height. You can assume that the height of each block is 1. Input is  The first line of the input contains an integer N, representing the number of LEGO towers that you have.
The second line of the input contains N integers as h1, h2,... hN, hi represents the height Of the ith tower. 
Output
Print the minimum number of blocks you need to ensure that all towers have the same height. 
Write the program in c#:

Solution: 
 public static int solv(List<int> h)
    {
        // Find the maximum height in the list
        int maxHeight = 0;
        foreach (int height in h)
        {
            if (height > maxHeight)
            {
                maxHeight = height;
            }
        }        
        // Calculate the total number of blocks needed to make all towers the same height
        int blocksNeeded = 0;
        foreach (int height in h)
        {
            blocksNeeded += (maxHeight - height);
        }        
        return blocksNeeded;
    }
  

  
37. Find deepest tree node given:
Write a program for binary Tree deepest Node search from the node that is passed in as input 
 Solution use BFS  using Queue

38. A team of data analysts at Amazon is working to identify patterns in data. During their analysis, they found 
a category of string they call a dominant string:
• It has an even length.
• And the string contains at least one character having frequency matching the exactly 
half of the length of the string.

Given a string s of length n, determine the number of its distinct substrings that are 
dominant strings.
Example
s = "idafddfii".
All even-length substrings of s with a frequency of any character that is exactly half their length are:
There are 13 dominant substrings in s.

Complete the function getDominantStringCount(string s) in C# below.
string s: the string to analyze
Output will be int: the number of dominant substrings in s

THIS QUESTION 38 was asked in Amazon and its 2 solutions are in ReadMeQuestion38Solution.txt

39. Given a string s, find the length of the longest substring without repeating characters.


40. An application requires different date formats to be converted into one common
date format.
Implement the function TransformDateFormat which accepts a list of dates as
strings, and returns a new list Of strings that represents dates in the format Of
YYYYDDMM, where YYYY, MM, and DD are numbers representing year, month, and
day, respectively. All incoming dates will be valid dates, but only those in one of the
following formats: Y YYYp DDP MM, YYYY/MM/DD, or MM-DD-YYYY, should be included in the returned list.
For example, TransformDateFormat(new List {"2010/02/20", 2 016p 19p 12, "11-18-
2012", "2018 12 24", "20130720"}) should return the list {"20102002", 20161912",
'20121811"}.
public static List<string> TransformDateFormat(List<string> dates){}



41. you are given an array of N integers. your task is to count the number of ways you can choose a pair(A[i], A[j] ) from the array such that :
1<=i<=j<=N, i!=j
A[i]+A[j] is odd
Note: O(n) complexity is expected.

Input
The first line of input contains an integer N, representing the size of the array.
The second line of input contains N space-separated integers. representing the elements of the array.
Output 
Print an integer representing the number of ways you can choose a pair that satisfies the given conditions.

public static long solve(List<int> A)


42. You are given a complex list of n products, each with a name, price, and weight.
Find out how many duplicate products are present within the list. Duplicate products contain identical parameters for all fields in the list (i.e. name, price, and weight).
Example:
There are n = 5 products with attributes listed in three arrays, aligned by index.
name = [ball, bat, glove, glove, glove]
price=[2,3,1,2,1]
weight =[2,5, 1, 1, 1]

The first two items are unique.
The two gloves at indices 2 and 4 are equal in all three attributes so there is 1 duplicate.
The glove at index 3 has a different price from the other two, so it is not a duplicate.
There is 1 duplicate item in the original list.


Complete the function numDuplicates(). The function must return an integer denoting the number of duplicates within the product list.

numDuplicates has the following parameter(s):
string name[n]. string array of size n, where names[i] denotes the name of the product at the index of i.
int price[n]. int array of size n, where prices[i] denotes the price of the product at the index of i.
int weight[n]. int array of size n, where weights[i] denotes the weight of the product at the index of i.


public static int numDuplicates(List<string> name,List<int> price, List<int> weight){}


43. You are given a complex list of n products, each with a name, price, and weight.
Find out how many duplicate products are present within the list. Duplicate products contain identical parameters for all fields in the list (i.e. name, price, and weight).
Example:
There are n = 5 products with attributes listed in three arrays, aligned by index.
name = [ball, bat, glove, glove, glove]
price=[2,3,1,2,1]
weight =[2,5, 1, 1, 1]

The first two items are unique.
The two gloves at indices 2 and 4 are equal in all three attributes so there is 1 duplicate.
The glove at index 3 has a different price from the other two, so it is not a duplicate.
There is 1 duplicate item in the original list.

Complete the function numDuplicates(). The function must return an integer denoting the number of duplicates within the product list.

numDuplicates has the following parameter(s):
string name[n]. string array of size n, where names[i] denotes the name of the product at the index of i.
int price[n]. int array of size n, where prices[i] denotes the price of the product at the index of i.
int weight[n]. int array of size n, where weights[i] denotes the weight of the product at the index of i.

public static int numDuplicates(List<string> name,List<int> price, List<int> weight){}



44. Dollar amounts are being entered into our system via a spreadsheet import.
Implement a function which takes a list of strings and returns a list of corresponding decimal values.
If a string can't be converted to a decimal. return null.

public static List<decimal?> Convert( List<String> totals){
}


45. There are two List<int> inputs, and we need to return a combination of the first and second lists without any duplicates in C# without using any prebuilt functions

46. Given n images to process, where each image requires specific filters applied for a defined time
frame. The cost to apply filters to the ith image is filterCost[i]. Each image must undergo
processing from the start day, startDay[i], to the end day, endDay(i] (inclusive), where O <= i < n.


There is an exclusive offer that a filter may be applied to all n images at a discounted rate, discountPrice, per day.

Devise a strategy to minimize costs and apply the necessary filters to each image during its designated processing period. The goal is to create an efficient image processing plan that adheres
to time constraints and budget considerations. Return the minimum cost modulo (10^9 + 7).
Example
Given n=3, filterCost= [2, 3, 4], startDay= [1, 1, 2], endDay= [2, 3, 4] and discountPrice= 6.


Applying filters on all the images at 6 per day on the 2nd and 3rd day will be optimal.
The modulo of the final cost is 5 + 6 + 6 +4= 21.

Write the algo in following function in java :

public static int getMinPreocessingCost(List<Integer> filterCost, list<integer> starttime, List<Integer> endTime, int discountPrice){

}


47. LRU cache with max Capacity (AMAZON real interview

48. Amazon Behaviour   Questions
Q. Tell me about a time where you faced problem with multiple level in it and how you 
solved what you learnt from it as softare developer?
STAR (Situation, Task, Action, Result) in STAR format

Ans:I ran into a pretty complex issue when we were integrating a third-party logistics API for real-time shipment tracking. The problem had multiple layers—technical, performance-related, and external dependencies.

- Technical Challenge: The API had inconsistent response times, sometimes taking 10+ seconds, which slowed down our order tracking dashboard.
- System Design Issue: Our architecture wasn’t built for handling delayed responses well, leading to UI timeouts and a poor user experience.
- External Dependency: The third-party provider had rate limits and occasional downtime, which wasn’t in our control.

To solve it, I took a multi-step approach:

- Optimized API Calls: Moved from synchronous API calls to an event-driven model using AWS SQS. Instead of waiting on responses, we processed updates asynchronously.
- Caching Layer: Implemented a Redis-based caching layer to store the latest tracking data, reducing the need for frequent external calls.
- Error Handling & Fallbacks: Added retry mechanisms with exponential backoff and a fallback to the last known status when the API was down.

- Optimized System Design (Event-Driven & Caching Approach)

New Architecture
Frontend:

Instead of polling, the UI subscribed to WebSocket events for real-time updates.
Backend (Node.js + Express with Event Processing):

Step 1: When a tracking request came in, instead of calling the API synchronously, a job was queued in AWS SQS (or Kafka for high-scale use cases).
Step 2: A background worker pulled the job from the queue and called the logistics API asynchronously.
Step 3: The response was stored in Redis (TTL 5 mins) for fast retrieval.
Step 4: If Redis didn’t have fresh data, the latest tracking info was fetched from PostgreSQL as a fallback.

Resilience Features:
a) Rate Limit Handling: Implemented exponential backoff for failed requests.
b) Circuit Breaker Pattern: If the API was down, served the last known status from cache/db instead of failing.
STAR (Situation, Task, Action, Result) in STAR format

✅ Reduced latency by 60% (faster UI load times).
✅ Improved scalability (no unnecessary direct API calls, handling more concurrent users).
✅ Better fault tolerance (handled API failures without breaking user experience).
✅ Decoupling using events made it easy to swap APIs if needed.


49. Product of Array Except Self (Turing interview)





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


Types of databases and their usecase
1. Key-value database (e.g., DynamoDB, Redis)	-	Key-value databases are highly scalable and ideal for high-throughput, low-latency operations, making them well-suited for real-time vote tracking.
2. Document database (e.g., MongoDB)	-	Document databases are more complex and less performant for quick retrieval of votes compared to key-value databases. They are more useful if there's a need for storing nested structures, but not critical for voting data.
3. Graph database (e.g., Amazon Neptune)	- Graph databases are optimized for storing relationships between entities, which isn't the main need for a voting system.
4. Ledger database (e.g., Amazon QLDB)	- Ledger databases ensure data integrity and immutability, which may be useful for auditing purposes. However, this isn't the primary requirement for a real-time voting scenario.
5. Distributed data processing system (Apache Hadoop/Spark)	-Hadoop or Spark is suitable for batch processing large volumes of data but is not optimal for real-time voting. Real-time, low-latency processing is more crucial for this use case.

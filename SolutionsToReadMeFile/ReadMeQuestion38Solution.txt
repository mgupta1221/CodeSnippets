A team of data analysts at Amazon is working to identify patterns in data. During their analysis, they found a category of string they call a dominant string:
• It has an even length.
• And the string contains at least one character having frequency matching the exactly half of the length of the string.

Given a string s of length n, determine the number of its distinct substrings that are dominant strings.
Example
s = "idafddfii".
All even-length substrings of s with a frequency of any character that is exactly half their length are:

There are 13 dominant substrings in s.

Complete the function getDominantStringCount() in C# below.
getDominantStringCount has the following parameter:
string s: the string to analyze

Output will be int: the number of dominant substrings in s

=============================================================================================

SOLUTION:
SOLUTION 1 will give Time-LIMIT Exceeded exception in few Classes
SOLUTION 2 will give correct output for all the test cases


=============================================================================================
Solution 1:

 public static int GetDominantStringCount(string s)
    {
        int n = s.Length;
        int dominantCount = 0;

        // Iterate over all possible even-length substrings
        for (int start = 0; start < n; start++)
        {
            Dictionary<char, int> frequencyMap = new Dictionary<char, int>();

            for (int end = start; end < n; end++)
            {
                char currentChar = s[end];
                if (frequencyMap.ContainsKey(currentChar))
                    frequencyMap[currentChar]++;
                else
                    frequencyMap[currentChar] = 1;

                int length = end - start + 1;

                // Only consider even-length substrings
                if (length % 2 == 0)
                {
                    int halfLength = length / 2;

                    // Check if any character has frequency equal to half of the length of the substring
                    foreach (var freq in frequencyMap.Values)
                    {
                        if (freq == halfLength)
                        {
                            dominantCount++;
                            break;
                        }
                    }
                }
            }
        }

        return dominantCount;
    }

=============================================================================================

Explanation:
1. Input and Initialization:
The function GetDominantStringCount takes a string s and calculates the number of dominant substrings.
dominantCount is used to keep track of the number of dominant substrings found.

2. Nested Loop to Iterate Over Substrings:
The outer loop (start) iterates through each possible starting point of a substring.
The inner loop (end) extends the substring from start to end.
The substring's character frequencies are tracked using a Dictionary<char, int> called frequencyMap.

3. Checking Conditions:
Only even-length substrings are considered.
For each even-length substring, the frequency of each character is checked to determine if it matches half the length of the substring.
If such a character is found, dominantCount is incremented.

4. Return Value:
Finally, dominantCount is returned, which represents the total number of dominant substrings.

=============================================================================================
SOLUTION 2

 public static int GetDominantStringCount(string s)
    {
        int n = s.Length;
        int dominantCount = 0;

        // Iterate over all possible even-length substrings
        for (int length = 2; length <= n; length += 2)  // Only even-length substrings
        {
            Dictionary<char, int> frequencyMap = new Dictionary<char, int>();

            // Initialize the frequency map for the first window of the given length
            for (int i = 0; i < length; i++)
            {
                char currentChar = s[i];
                if (frequencyMap.ContainsKey(currentChar))
                    frequencyMap[currentChar]++;
                else
                    frequencyMap[currentChar] = 1;
            }

            // Check if the initial substring is dominant
            if (IsDominant(frequencyMap, length))
                dominantCount++;

            // Slide the window across the string
            for (int start = 1; start <= n - length; start++)
            {
                // Remove the character that goes out of the window
                char charToRemove = s[start - 1];
                frequencyMap[charToRemove]--;
                if (frequencyMap[charToRemove] == 0)
                    frequencyMap.Remove(charToRemove);

                // Add the character that comes into the window
                char charToAdd = s[start + length - 1];
                if (frequencyMap.ContainsKey(charToAdd))
                    frequencyMap[charToAdd]++;
                else
                    frequencyMap[charToAdd] = 1;

                // Check if the current substring is dominant
                if (IsDominant(frequencyMap, length))
                    dominantCount++;
            }
        }

        return dominantCount;
    }   


=============================================================================================
Optimizations Made in Solution 2:
1. Sliding Window Approach:
Instead of recalculating character frequencies for every possible substring, a sliding window approach is used to efficiently manage the frequency map.
As the window slides, we only need to update the frequency map by removing the frequency of the character that goes out of the window and adding the frequency of the character that comes into the window.

2. Looping Over Even Lengths Only:
Instead of looping over all possible lengths, we only loop over even lengths (length = 2, 4, 6, ...), which reduces the number of iterations by half.

3. Early Removal of Characters with Zero Frequency:
We remove characters from the frequency map when their frequency drops to zero, which helps reduce unnecessary checks.

Time Complexity:
The outer loop runs for each possible even length (O(n/2)).
The inner loop slides the window across the string (O(n)).
The complexity for maintaining and checking the frequency map is O(1) per iteration due to the fixed size of characters (only lowercase English letters).
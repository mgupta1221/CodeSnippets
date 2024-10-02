 public static long solve(List<int> A)
    {
        long evenCount = 0;
        long oddCount = 0;

        // Iterate through the list and count the number of even and odd elements
        foreach (int num in A)
        {
            if (num % 2 == 0)
                evenCount++;
            else
                oddCount++;
        }

        // The number of pairs with one even and one odd element
        long result = evenCount * oddCount;

        return result;
    }
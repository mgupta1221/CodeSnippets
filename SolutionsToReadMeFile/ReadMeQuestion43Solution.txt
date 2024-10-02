 public static int numDuplicates(List<string> name, List<int> price, List<int> weight)
    {
        HashSet<string> uniqueProducts = new HashSet<string>();
        int duplicateCount = 0;

        for (int i = 0; i < name.Count; i++)
        {
            // Create a unique key for each product using its attributes
            string productKey = $"{name[i]}-{price[i]}-{weight[i]}";

            // If the productKey already exists, it is a duplicate
            if (uniqueProducts.Contains(productKey))
            {
                duplicateCount++;
            }
            else
            {
                uniqueProducts.Add(productKey);
            }
        }

        return duplicateCount;
    }
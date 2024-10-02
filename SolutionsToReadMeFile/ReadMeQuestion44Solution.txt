  public static List<decimal?> Convert(List<string> totals)
    {
        List<decimal?> convertedTotals = new List<decimal?>();

        foreach (string total in totals)
        {
            // Try to parse the string to a decimal value
            if (decimal.TryParse(total, NumberStyles.Currency, CultureInfo.InvariantCulture, out decimal value))
            {
                convertedTotals.Add(value);
            }
            else
            {
                // If parsing fails, add null
                convertedTotals.Add(null);
            }
        }

        return convertedTotals;
    }

     public static void Main(string[] args)
    {
        List<string> totals = new List<string> { "123.45", "$123.45", "invalid", "789.12", "-56.78", "$-45.67" };
        List<decimal?> result = Convert(totals);

        foreach (var item in result)
        {
            Console.WriteLine(item.HasValue ? item.Value.ToString(CultureInfo.InvariantCulture) : "null");
        }
    }
 2 Solutions are given
 Solution 1: Using Regex
 Solution 2: NOT Using Regex
 ==========================================================================================
 Solution 1


 public static List<string> TransformDateFormat(List<string> dates)
    {
        List<string> transformedDates = new List<string>();

        // Define regex patterns for each date format
        string format1 = @"^\d{4}/\d{2}/\d{2}$"; // YYYY/MM/DD
        string format2 = @"^\d{4}p \d{2}p \d{2}$"; // YYYYp DDp MM
        string format3 = @"^\d{2}-\d{2}-\d{4}$"; // MM-DD-YYYY

        foreach (string date in dates)
        {
            if (Regex.IsMatch(date, format1))
            {
                // YYYY/MM/DD format
                DateTime parsedDate = DateTime.ParseExact(date, "yyyy/MM/dd", CultureInfo.InvariantCulture);
                transformedDates.Add(parsedDate.ToString("yyyyddMM"));
            }
            else if (Regex.IsMatch(date, format2))
            {
                // YYYYp DDp MM format
                string cleanedDate = date.Replace("p", ""); // Remove "p"
                DateTime parsedDate = DateTime.ParseExact(cleanedDate, "yyyy dd MM", CultureInfo.InvariantCulture);
                transformedDates.Add(parsedDate.ToString("yyyyddMM"));
            }
            else if (Regex.IsMatch(date, format3))
            {
                // MM-DD-YYYY format
                DateTime parsedDate = DateTime.ParseExact(date, "MM-dd-yyyy", CultureInfo.InvariantCulture);
                transformedDates.Add(parsedDate.ToString("yyyyddMM"));
            }
        }

        return transformedDates;
    }

public static void Main(string[] args)
{
    List<string> dates = new List<string> { "2010/02/20", "2016p 19p 12", "11-18-2012", "2018 12 24", "20130720" };
    List<string> result = TransformDateFormat(dates);

    foreach (string date in result)
    {
        Console.WriteLine(date);
    }
}


 ==========================================================================================
 
 Solution 2

  public static List<string> TransformDateFormat(List<string> dates)
    {
        List<string> transformedDates = new List<string>();

        foreach (string date in dates)
        {
            if (date.Contains("/") && date.Length == 10)
            {
                // YYYY/MM/DD format (e.g., "2010/02/20")
                try
                {
                    DateTime parsedDate = DateTime.ParseExact(date, "yyyy/MM/dd", CultureInfo.InvariantCulture);
                    transformedDates.Add(parsedDate.ToString("yyyyddMM"));
                }
                catch (FormatException)
                {
                    continue;
                }
            }
            else if (date.Contains("p") && date.Split(' ').Length == 3)
            {
                // YYYYp DDp MM format (e.g., "2016p 19p 12")
                try
                {
                    string[] parts = date.Split(' ');
                    string cleanedDate = $"{parts[0].Replace("p", "")} {parts[1].Replace("p", "")} {parts[2]}";
                    DateTime parsedDate = DateTime.ParseExact(cleanedDate, "yyyy dd MM", CultureInfo.InvariantCulture);
                    transformedDates.Add(parsedDate.ToString("yyyyddMM"));
                }
                catch (FormatException)
                {
                    continue;
                }
            }
            else if (date.Contains("-") && date.Length == 10)
            {
                // MM-DD-YYYY format (e.g., "11-18-2012")
                try
                {
                    DateTime parsedDate = DateTime.ParseExact(date, "MM-dd-yyyy", CultureInfo.InvariantCulture);
                    transformedDates.Add(parsedDate.ToString("yyyyddMM"));
                }
                catch (FormatException)
                {
                    continue;
                }
            }
        }

        return transformedDates;
    }
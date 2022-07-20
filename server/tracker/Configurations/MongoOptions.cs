namespace Tracker.Configurations
{
    public class MongodbSettingsOptions
    {
        public const string key = "MongodbSettings";
        public string? ConnectionString { get; set; }

        public string? CollectionName { get; set; }


    }

}
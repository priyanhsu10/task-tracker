using Microsoft.Extensions.Options;
using MongoDB.Driver;
using Tracker.Configurations;
using Tracker.Repositories;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddSingleton<IMongoClient>(
    new MongoClient(builder.Configuration.GetValue<string>("MongodbSettings:ConnectionString")));
builder.Services.Configure<IOptions<MongodbSettingsOptions>>(builder.Configuration.GetSection(MongodbSettingsOptions.key));
builder.Services.AddSingleton(typeof(IRepository<>), typeof(Repository<>));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

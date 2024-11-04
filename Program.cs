var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// Status endpoint
app.MapGet("/api/status", () => "Server healthy!");

app.Run();

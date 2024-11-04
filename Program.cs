var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// Setup static file hosting
app.UseDefaultFiles();
app.UseStaticFiles();

// Status endpoint
app.MapGet("/api/status", () => "Server healthy!");

app.Run();

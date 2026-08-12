var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi("v1");

}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();


/*
var builder = WebApplication.CreateBuilder(args);

// Agrega servicios al contenedor de inversión de control (IoC).
builder.Services.AddControllers();

// Configura las herramientas para explorar y documentar los Endpoints
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configura el pipeline de solicitudes HTTP (Middlewares).
if (app.Environment.IsDevelopment())
{
    // Habilita el generador de JSON de Swagger y la interfaz gráfica
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

// Mapea los controladores para que las rutas respondan a las peticiones
app.MapControllers();

app.Run();


*/
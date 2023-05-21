using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using TuitionServerr.Controllers.DAL;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddDbContext<TuitionDbContext>(option =>
{
    option.UseSqlServer(builder.Configuration.GetConnectionString("DbString"));
});

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "AllowOrigin",
        builder =>
        {
            builder.WithOrigins("https://localhost:7006", "http://localhost:4200")
            .AllowAnyHeader()
            .AllowAnyMethod();
        });

});

builder.Services.AddAuthentication(O =>
{
    O.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    O.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
    O.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
    O.RequireAuthenticatedSignIn = false;

}).AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["JWT:Secret"])),
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidIssuer = builder.Configuration["JWT:ValidIssuer"],
        ValidAudience = builder.Configuration["JWT:ValidAudience"]
    };
});



builder.Services.AddControllers()
   .AddJsonOptions(options =>
   options.JsonSerializerOptions.PropertyNamingPolicy = null);

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors("AllowOrigin");
app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.Run();

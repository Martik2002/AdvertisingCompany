﻿using System.Reflection;
using AdvertisingCompany.Application.Common.Interfaces;
using AdvertisingCompany.Domain.Entities;
using AdvertisingCompany.Infrastructure.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace AdvertisingCompany.Infrastructure.Data;

public class ApplicationDbContext : IdentityDbContext<ApplicationUser>, IApplicationDbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

    public DbSet<TodoList> TodoLists => Set<TodoList>();

    public DbSet<TodoItem> TodoItems => Set<TodoItem>();

    protected override void OnModelCreating(ModelBuilder builder)
    {
        builder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());

        base.OnModelCreating(builder);
    }
}

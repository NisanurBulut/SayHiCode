﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace webApiTokenAuthentication.Models
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class VkbAnalizEntities : DbContext
    {
        public VkbAnalizEntities()
            : base("name=VkbAnalizEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<CihazDetay> CihazDetays { get; set; }
        public virtual DbSet<CihazDurum> CihazDurums { get; set; }
        public virtual DbSet<Kullanici> Kullanicis { get; set; }
        public virtual DbSet<Role> Roles { get; set; }
        public virtual DbSet<Tren> Trens { get; set; }
        public virtual DbSet<TrenCihaz> TrenCihazs { get; set; }
    }
}

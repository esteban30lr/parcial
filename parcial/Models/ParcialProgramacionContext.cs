using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace parcial.Models;

public partial class ParcialProgramacionContext : DbContext
{
    public ParcialProgramacionContext()
    {
    }

    public ParcialProgramacionContext(DbContextOptions<ParcialProgramacionContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Comidum> Comida { get; set; }

    public virtual DbSet<Dueño> Dueños { get; set; }

    public virtual DbSet<Mascota> Mascotas { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=DESKTOP-VVT0133; Database=ParcialProgramacion; Trusted_Connection=True; TrustServerCertificate=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Comidum>(entity =>
        {
            entity.HasKey(e => e.IdComida);

            entity.Property(e => e.IdComida).HasColumnName("Id_comida");
            entity.Property(e => e.AñoExpedicion).HasColumnName("año_expedicion");
            entity.Property(e => e.EspecieComida)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("especie_comida");
            entity.Property(e => e.MarcaComida)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("marca_comida");
            entity.Property(e => e.PrecioComida).HasColumnName("precio_comida");
            entity.Property(e => e.ReferenciaComida)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("referencia_comida");
        });

        modelBuilder.Entity<Dueño>(entity =>
        {
            entity.HasKey(e => e.IdCliente);

            entity.Property(e => e.IdCliente).HasColumnName("id_cliente");
            entity.Property(e => e.Apellido1)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("apellido1");
            entity.Property(e => e.Apellido2)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("apellido2");
            entity.Property(e => e.Direccion)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("direccion");
            entity.Property(e => e.Email)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("email");
            entity.Property(e => e.Identificacion).HasColumnName("identificacion");
            entity.Property(e => e.Nombre)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("nombre");
            entity.Property(e => e.Telefono)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("telefono");
        });

        modelBuilder.Entity<Mascota>(entity =>
        {
            entity.HasKey(e => e.IdMascota);

            entity.Property(e => e.IdMascota).HasColumnName("id_mascota");
            entity.Property(e => e.Especie)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("especie");
            entity.Property(e => e.NombreDueño)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("nombre_dueño");
            entity.Property(e => e.NombreMascota)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("nombre_mascota");
            entity.Property(e => e.Peso).HasColumnName("peso");
            entity.Property(e => e.Raza)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("raza");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}

using System;
using System.Collections.Generic;

namespace parcial.Models;

public partial class Dueño
{
    public int IdCliente { get; set; }

    public int? Identificacion { get; set; }

    public string? Nombre { get; set; }

    public string? Apellido1 { get; set; }

    public string? Apellido2 { get; set; }

    public string? Telefono { get; set; }

    public string? Direccion { get; set; }

    public string? Email { get; set; }
}

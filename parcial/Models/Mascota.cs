using System;
using System.Collections.Generic;

namespace parcial.Models;

public partial class Mascota
{
    public int IdMascota { get; set; }

    public string? NombreMascota { get; set; }

    public string? NombreDueño { get; set; }

    public double? Peso { get; set; }

    public string? Raza { get; set; }

    public string? Especie { get; set; }
}

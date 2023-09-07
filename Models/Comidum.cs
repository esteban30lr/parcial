using System;
using System.Collections.Generic;

namespace parcial.Models;

public partial class Comidum
{
    public int IdComida { get; set; }

    public string? MarcaComida { get; set; }

    public string? ReferenciaComida { get; set; }

    public string? EspecieComida { get; set; }

    public double? PrecioComida { get; set; }

    public short? AñoExpedicion { get; set; }
}

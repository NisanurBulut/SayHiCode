using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Text;

namespace SayHiXAML.core
{
    public enum EnumDepartment
    {
        [Description("Türkçe")]
        VERBAL=0,

        [Description("Eşit Ağırlık")]
        EqualWeight = 1,

        [Description("Sayısal")]
        NUMERICAL = 2
    }
}

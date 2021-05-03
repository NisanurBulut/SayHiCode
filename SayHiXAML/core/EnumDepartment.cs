using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Text;

namespace SayHiXAML.core
{
    public enum EnumDepartment
    {
        [Description("Türkçe")]
        TURKCE=0,

        [Description("Matematik")]
        MATEMATIK = 1,

        [Description("FEN")]
        FEN = 2,

        [Description("SOSYAL")]
        SOSYAL = 3
    }
}

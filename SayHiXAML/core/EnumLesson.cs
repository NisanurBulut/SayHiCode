using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Text;

namespace SayHiXAML.core
{
    public enum EnumLesson
    {
        [Description("Türkçe")]
        TURKISH=0,

        [Description("Sosyal")]
        SOCIAL = 1,

        [Description("Fen")]
        SCIENCE = 2,

        [Description("Matematik")]
        MATH = 3
    }
}

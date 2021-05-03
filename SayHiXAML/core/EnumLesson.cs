using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Text;

namespace SayHiXAML.core
{
    public enum EnumLesson
    {
        [Description("Turkish")]
        TURKISH=0,

        [Description("Social")]
        SOCIAL = 1,

        [Description("Science")]
        SCIENCE = 2,

        [Description("Math")]
        MATH = 3
    }
}

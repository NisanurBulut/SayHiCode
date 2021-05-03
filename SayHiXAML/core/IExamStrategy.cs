using System;
using System.Collections.Generic;
using System.Text;

namespace SayHiXAML.core
{
    public interface IExamStrategy
    {
        EnumDepartment getFirst();
        EnumDepartment getSecond();
        EnumDepartment getThird();
        EnumDepartment getForth();
    }
}

using System;
using System.Collections.Generic;
using System.Text;

namespace SayHiXAML.core
{
    public interface IExamStrategy
    {
        EnumLesson getFirst();
        EnumLesson getSecond();
        EnumLesson getThird();
        EnumLesson getForth();
    }
}

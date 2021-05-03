using System;
using System.Collections.Generic;
using System.Text;

namespace SayHiXAML.core
{
    public interface IExamStrategy
    {
        EnumLesson getFirstLesson();
        EnumLesson getSecondLesson();
        EnumLesson getThirdLesson();
        EnumLesson getForthLesson();
    }
}

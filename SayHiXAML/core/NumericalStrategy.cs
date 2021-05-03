using System;
using System.Collections.Generic;
using System.Text;

namespace SayHiXAML.core
{
    public class NumericalStrategy : IExamStrategy
    {
        public EnumLesson getFirstLesson()
        {
            return EnumLesson.MATH;
        }

        public EnumLesson getForthLesson()
        {
            return EnumLesson.SOCIAL;
        }

        public EnumLesson getSecondLesson()
        {
            return EnumLesson.SCIENCE;
        }

        public EnumLesson getThirdLesson()
        {
            return EnumLesson.TURKISH;
        }
    }
}

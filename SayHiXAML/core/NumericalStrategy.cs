using System;
using System.Collections.Generic;
using System.Text;

namespace SayHiXAML.core
{
    public class NumericalStrategy : IExamStrategy
    {
        public EnumLesson getFirst()
        {
            return EnumLesson.MATH;
        }

        public EnumLesson getForth()
        {
            return EnumLesson.SOCIAL;
        }

        public EnumLesson getSecond()
        {
            return EnumLesson.SCIENCE;
        }

        public EnumLesson getThird()
        {
            return EnumLesson.TURKISH;
        }
    }
}

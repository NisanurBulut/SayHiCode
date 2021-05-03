using System;
using System.Collections.Generic;
using System.Text;

namespace SayHiXAML.core
{
    public class VerbalStrategy : IExamStrategy
    {
        public EnumLesson getFirst()
        {
            return EnumLesson.TURKISH;
        }

        public EnumLesson getForth()
        {
            return EnumLesson.SCIENCE;
        }

        public EnumLesson getSecond()
        {
            return EnumLesson.SOCIAL;
        }

        public EnumLesson getThird()
        {
            return EnumLesson.MATH;
        }
    }
}

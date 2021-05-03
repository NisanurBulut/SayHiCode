using System;
using System.Collections.Generic;
using System.Text;

namespace SayHiXAML.core
{
    public class VerbalStrategy : IExamStrategy
    {
        public EnumLesson getFirstLesson()
        {
            return EnumLesson.TURKISH;
        }

        public EnumLesson getForthLesson()
        {
            return EnumLesson.SCIENCE;
        }

        public EnumLesson getSecondLesson()
        {
            return EnumLesson.SOCIAL;
        }

        public EnumLesson getThirdLesson()
        {
            return EnumLesson.MATH;
        }
    }
}

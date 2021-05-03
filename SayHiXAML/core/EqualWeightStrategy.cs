using System;
using System.Collections.Generic;
using System.Text;

namespace SayHiXAML.core
{
    public class EqualWeightStrategy : IExamStrategy
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
            return EnumLesson.MATH;
        }

        public EnumLesson getThirdLesson()
        {
            return EnumLesson.SOCIAL;
        }
    }
}

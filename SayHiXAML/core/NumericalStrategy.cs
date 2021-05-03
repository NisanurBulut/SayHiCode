using System;
using System.Collections.Generic;
using System.Text;

namespace SayHiXAML.core
{
    public class NumericalStrategy : IExamStrategy
    {
        public EnumLesson getFirst()
        {
            return EnumLesson.MATEMATIK;
        }

        public EnumLesson getForth()
        {
            return EnumLesson.FEN;
        }

        public EnumLesson getSecond()
        {
            return EnumLesson.FEN;
        }

        public EnumLesson getThird()
        {
            return EnumLesson.FEN;
        }
    }
}

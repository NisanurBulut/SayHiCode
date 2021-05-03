using System;
using System.Collections.Generic;
using System.Text;

namespace SayHiXAML.core
{
    public class VerbalStrategy : IExamStrategy
    {
        public EnumLesson getFirst()
        {
            return EnumLesson.TURKCE;
        }

        public EnumLesson getForth()
        {
            return EnumLesson.FEN;
        }

        public EnumLesson getSecond()
        {
            return EnumLesson.SOSYAL;
        }

        public EnumLesson getThird()
        {
            return EnumLesson.MATEMATIK;
        }
    }
}

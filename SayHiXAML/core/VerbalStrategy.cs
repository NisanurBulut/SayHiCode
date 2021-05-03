using System;
using System.Collections.Generic;
using System.Text;

namespace SayHiXAML.core
{
    public class VerbalStrategy : IExamStrategy
    {
        public EnumDepartment getFirst()
        {
            return EnumDepartment.TURKCE;
        }

        public EnumDepartment getForth()
        {
            return EnumDepartment.FEN;
        }

        public EnumDepartment getSecond()
        {
            return EnumDepartment.SOSYAL;
        }

        public EnumDepartment getThird()
        {
            return EnumDepartment.MATEMATIK;
        }
    }
}

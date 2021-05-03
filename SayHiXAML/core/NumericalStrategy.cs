using System;
using System.Collections.Generic;
using System.Text;

namespace SayHiXAML.core
{
    public class NumericalStrategy : IExamStrategy
    {
        public EnumDepartment getFirst()
        {
            return EnumDepartment.MATEMATIK;
        }

        public EnumDepartment getForth()
        {
            return EnumDepartment.FEN;
        }

        public EnumDepartment getSecond()
        {
            return EnumDepartment.FEN;
        }

        public EnumDepartment getThird()
        {
            return EnumDepartment.FEN;
        }
    }
}

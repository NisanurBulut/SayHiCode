using System;
using System.Collections.Generic;
using System.Text;

namespace SayHiXAML.core
{
    public class StudentModel
    {
        private EnumDepartment Department { get; set; }
        private IExamStrategy examStrategy;
        public StudentModel(EnumDepartment department)
        {
            this.Department = department;

            if(this.Department==null)
            {
                throw new NullReferenceException();

                switch (this.Department)
                {
                    case ""
                }
            }
        }
    }
}

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

            if (this.Department == null)
            {
                throw new NullReferenceException();
            }
            switch (this.Department)
            {
                case EnumDepartment.VERBAL:
                    {
                        examStrategy = new VerbalStrategy();
                        break;
                    }
                case EnumDepartment.EQUALWEIGHT:
                    {
                        examStrategy = new EqualWeightStrategy();
                        break;
                    }
                case EnumDepartment.NUMERICAL:
                    {
                        examStrategy = new NumericalStrategy();
                        break;
                    }
                default: break;
            }
        }

        public String OrderPriority()
        {
            return "1. "+ examStrategy.getFirstLesson().DescriptionAttr() + "\n" +
                   "2. "+ examStrategy.getSecondLesson().DescriptionAttr() + "\n" + 
                   "3. "+ examStrategy.getThirdLesson().DescriptionAttr() + "\n" + 
                   "4. "+ examStrategy.getForthLesson();
        } 
    }
}

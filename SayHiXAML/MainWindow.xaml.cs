using SayHiXAML.core;
using System.Windows;
using System.Windows.Input;

namespace SayHiXAML
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        private void Grid_MouseDown(object sender, MouseButtonEventArgs e)
        {
            if (e.LeftButton == MouseButtonState.Pressed)
            {
                DragMove();
            }
        }

        private void btn_decideDepartmentClick(object sender, RoutedEventArgs e)
        {
            this.strategyText.Text = string.Empty;
            if (this.rBtnEsitAgirlik.IsChecked == true)
            {
                StudentModel studentModel = new StudentModel(EnumDepartment.EQUALWEIGHT);
                this.strategyText.Text = studentModel.OrderPriority();
            }
            else if (this.rBtnSayisal.IsChecked == true)
            {
                StudentModel studentModel = new StudentModel(EnumDepartment.NUMERICAL);
                this.strategyText.Text = studentModel.OrderPriority();
            }
            else if (this.rButtonSozel.IsChecked == true)
            {
                StudentModel studentModel = new StudentModel(EnumDepartment.VERBAL);
                this.strategyText.Text = studentModel.OrderPriority();
            }
            else
            {
                this.strategyText.Text = "Plase select department...";
            }
        }
    }
}

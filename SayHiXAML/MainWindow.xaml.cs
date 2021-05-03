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
            if (this.rBtnEsitAgirlik.IsChecked == true)
            {

            }
            else if (this.rBtnSayisal.IsChecked == true)
            {

            }
            else if (this.rButtonSozel.IsChecked == true)
            {

            }
            else
            {

            }
        }
    }
}

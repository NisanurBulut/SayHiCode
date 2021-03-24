import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const AppToolBar=()=>{
    return (
        <div>
          <AppBar color="primary" position="static">
            <Toolbar>
            </Toolbar>
          </AppBar>
        </div>
      );
  }

  export default AppToolBar;
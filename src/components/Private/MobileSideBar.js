import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';

import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { useDispatch, useSelector } from "react-redux";
import { onChangeAsideActive } from "../store/features/asideSlice";
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const aside = useSelector((state) => state.asideState.aside);
  const dispatch = useDispatch();

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h6" noWrap component="div">
            Persistent drawer
  </Typography>*/}
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {/* *  copy part left*/}
          <div className="">
            <button
              className="sidelist button-6"
              onClick={() => dispatch(onChangeAsideActive("Favorites"))}
            >
              <i className="fa-regular fa-star"></i>
              Favorites
            </button>
            <div>
              <button
                className="sidelist button-6"
                onClick={() => dispatch(onChangeAsideActive("Cricket"))}
              >
                <img src="./cricket_ball.png" className="img_width" alt="" />
                Cricket
              </button>
            </div>
            <div>
              <button
                className="sidelist button-6"
                onClick={() =>
                  dispatch(onChangeAsideActive("Greyhound Racing"))
                }
              >
                <img src="./greyhound.jpg" className="img_width" alt="" />
                Greyhound Racing
              </button>
            </div>
            <div>
              <button
                className="sidelist button-6"
                onClick={() => dispatch(onChangeAsideActive("Horse Racing"))}
              >
                <img src="./horse_racing.jpg" className="img_width" alt="" />
                Horse Racing
              </button>
            </div>
            <div>
              <button
                className="sidelist button-6"
                onClick={() => dispatch(onChangeAsideActive("Soccer"))}
              >
                <img src="./soccer.webp" className="img_width" alt="" />
                Soccer
              </button>
            </div>
            <div>
              <button
                className="sidelist button-6"
                onClick={() => dispatch(onChangeAsideActive("Tennis"))}
              >
                <img src="./Tennis_bal.png" className="img_width" alt="" />
                Tennis
              </button>
            </div>
            <div>
              <button
                className="sidelist button-6"
                onClick={() => dispatch(onChangeAsideActive("LiveCasino"))}
              >
                <img src="./caino.png" className="img_width" alt="" />
                Live Casino
              </button>
            </div>
          </div>
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
}

// {['Cricket', 'Greyhound Racing', 'Horse Racing', 'Horse Racing Todays','Soccer', 'Tennis', 'Live Casino'].map((text, index) => (
//   <ListItem key={text} disablePadding>
//     <ListItemButton>
//       <ListItemIcon>
//         {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//       </ListItemIcon>
//       <ListItemText primary={text} />
//     </ListItemButton>
//   </ListItem>
// ))}
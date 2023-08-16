import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTranslation } from "react-i18next";
import Switcher from "../Switcher/Switcher";
import LanguageIcon from '@mui/icons-material/Language';
import { Link } from "react-router-dom";

export default function IconNavbar() {
  const [state, setState] = React.useState({
    right: false,
  });

    //translate
    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
      i18n.changeLanguage(language);
    };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      className="h-[100vh] dark:bg-[#111827] dark:text-[#fff]"
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className="dark:bg-[#111827] dark:text-[#fff]">
        <div className="flex items-center justify-evenly">
          <FormControl sx={{ m: 1, minWidth: 80 }}>
            <InputLabel id="demo-simple-select-autowidth-label">
              {" "}
              <LanguageIcon />{" "}
            </InputLabel>
            <Select
              className=" dark:bg-[#fefefe]"
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              onChange={(event) => changeLanguage(event.target.value)}
              autoWidth
              label="Age"
            >
              <MenuItem value="en">EN</MenuItem>
              <MenuItem value="ru">RU</MenuItem>
              <MenuItem value="tj">TJ</MenuItem>
            </Select>
          </FormControl>
          <Switcher />
        </div>

        {[
          <Link onClick={toggleDrawer(anchor, false)} to={"/"}>
            Home
          </Link>,
          <Link onClick={toggleDrawer(anchor, false)} to={"/Komp"}>
            О компании
          </Link>,
          <Link onClick={toggleDrawer(anchor, false)} to={"/Obj"}>
            Обьекты
          </Link>,
          <Link onClick={toggleDrawer(anchor, false)} to={"/Press"}>
            Пресс-центр
          </Link>,
          <Link onClick={toggleDrawer(anchor, false)} to={"/About"}>
            Видео
          </Link>,
          <Link onClick={toggleDrawer(anchor, false)} to={"/Contact"}>
            Контакты
          </Link>,
        ].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div className="dark:text-[#fff]">
      {["right"].map((anchor) => (
        <React.Fragment key={anchor} >
          <MenuIcon onClick={toggleDrawer(anchor, true)}> </MenuIcon>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

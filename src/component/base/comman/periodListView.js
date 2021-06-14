import React from 'react';
import {makeStyles, MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'yekan',
        ].join(','),
    },
});
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        textAlign: 'rtl',
        fontFamily: 'yekan'
    },
}));

const options = [
    'ایستا',
    'به روزرسانی هر دقیقه',
    'به روزرسانی هر 5  دقیقه',
    'به روزرسانی هر 10 دقیقه',
    'به روزرسانی هر 30 دقیقه',
];
const optionsEn = [
    'fix',
    '1',
    '5',
    '10',
    '30',
];
const getData = () => {
    const refreshIndex = localStorage.getItem("refreshIndex")
    if (refreshIndex === null)
        return 1
    else {
        return refreshIndex
    }

};
export default function PeriodListMenu() {
    // this listMenu on refresh rate control work
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(getData());


    const handleClickListItem = (event) => {
        console.log(event)
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        console.log(index, options[index])
        saveOnLocalStorage(optionsEn[index], index)
        setSelectedIndex(index);
        setAnchorEl(null);
    };

    function saveOnLocalStorage(data, index) {
        localStorage.setItem("refreshRate", data)
        localStorage.setItem("refreshIndex", index)
        console.log("saved", data)
    }

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <MuiThemeProvider theme={theme}>
            <div className={classes.root}>
                <List component="nav" aria-label="Device settings">
                    <ListItem
                        button
                        aria-haspopup="true"
                        aria-controls="lock-menu"
                        aria-label="به روز رسانی"
                        onClick={handleClickListItem}
                    >
                        <ListItemText className={classes.root} primary="به روز رسانی"
                                      secondary={options[selectedIndex]}/>
                    </ListItem>
                </List>
                <Menu
                    id="lock-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    {options.map((option, index) => (
                        <MenuItem
                            key={option}
                            // disabled={index === 0}
                            selected={index === selectedIndex}
                            onClick={(event) => handleMenuItemClick(event, index)}
                        >
                            {option}
                        </MenuItem>
                    ))}
                </Menu>
            </div>
        </MuiThemeProvider>
    );
}

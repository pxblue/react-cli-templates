import React from 'react';
import { AppBar, IconButton, Hidden, Toolbar, Typography, createStyles, makeStyles, useTheme } from '@material-ui/core';
import { EmptyState } from '@pxblue/react-components';
import Menu from '@material-ui/icons/Menu';
import Event from '@material-ui/icons/Event';
import { useDrawer } from '../contexts/drawerContextProvider';

const useStyles = makeStyles((theme) =>
    createStyles({
        toolbar: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
    })
);

export const PageTwo = () => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const { setDrawerOpen } = useDrawer();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <AppBar position={'sticky'}>
                <Toolbar className={classes.toolbar}>
                    <Hidden mdUp={true}>
                        <IconButton
                            color={'inherit'}
                            onClick={() => {
                                setDrawerOpen(true);
                            }}
                            edge={'start'}
                            style={{ marginRight: theme.spacing(3) }}
                        >
                            <Menu />
                        </IconButton>
                    </Hidden>
                    <Typography variant={'h6'} color={'inherit'}>
                        Page Two
                    </Typography>
                </Toolbar>
            </AppBar>
            <div style={{ flex: '1 1 0px' }}>
                <EmptyState
                    icon={<Event fontSize={'inherit'} />}
                    title={'Coming Soon'}
                    description={'Replace this page with your own content'}
                />
            </div>
        </div>
    );
};

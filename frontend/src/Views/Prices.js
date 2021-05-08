import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import CheckIcon from '@material-ui/icons/Check';
import {ArrowBack} from "@material-ui/icons";
import {NavLink} from "react-router-dom";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit">
                Concierge Services
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.info.light : theme.palette.primary.dark,
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
    },
}));

const tiers = [
    {
        title: 'Basic',
        description: 'Just for joining the Concierge Programme you get advantages on your stays:',
        privileges: [
            'Exclusive services',
            'Receive 500 points',
        ],
        conditions: [
            'Stay in a ordinary room ',
        ],
        buttonText: 'Sign up for free',
        buttonVariant: 'outlined',
        tierVIP: 1
    },
    {
        title: 'Premium',
        description: 'Get even more advantages with Premium and discover a world of exclusive services:',
        privileges: [
            'Premium services included',
            'Receive 500 additional points',
            'Priority email support',
        ],
        conditions: [
            'Stay in a premium room ',
            'Stay 6 times in the last year',
        ],
        buttonText: 'Get started',
        buttonVariant: 'contained',
        tierVIP: 2
    },
    {
        title: 'VIP',
        subheader: 'Best option',
        description: 'Keep all the benefits of Premium and increase your privileges to make your stays unique:',
        privileges: [
            'VIP services included',
            'Receive 1000 additional points',
            'Help center access',
            'Additional phone support',
        ],
        conditions: [
            'Stay in a VIP room ',
            'Stay 12 times in the last year',

        ],
        buttonText: 'I want it!',
        buttonVariant: 'outlined',
        tierVIP: 3
    },
];

export default function Prices() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline/>
            <NavLink to="/profile/"> <ArrowBack style={{margin: "10px"}}/> </NavLink>
            <Container maxWidth="sm" component="main" className={classes.heroContent}>

                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Service levels
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" component="p">
                    Take a look over the levels of user that best suits your needs and start an adventure among our wide
                    variety of
                    services
                </Typography>
            </Container>

            <Container maxWidth="md" component="main">
                <Grid container spacing={3} alignItems="flex-end">
                    {tiers.map((tier) => (

                        <Grid item key={tier.title} xs={12} sm={6} md={4}>
                            <Card>
                                <CardHeader
                                    title={tier.title}
                                    subheader={tier.subheader}
                                    titleTypographyProps={{align: 'center'}}
                                    subheaderTypographyProps={{align: 'center'}}
                                    action={tier.title === 'VIP' ? <StarIcon/> : null}
                                    className={classes.cardHeader}
                                />
                                <CardContent>
                                    <ul>
                                        <Typography component="li" variant="subtitle1" align="left">
                                            {tier.description}
                                        </Typography>
                                        {tier.privileges.map((line) => (
                                            <Typography color="textPrimary" component="li" variant="subtitle1" align="left" key={line}>
                                                <CheckIcon/> {line}
                                            </Typography>
                                        ))}
                                        <br/>
                                        <Typography variant="h6" color="textSecondary">
                                            Conditions:
                                        </Typography>
                                        {tier.conditions.map((line) => (
                                            <Typography color="textSecondary" component="li" variant="subtitle1" align="left" key={line}>
                                                <CheckIcon/> {line}
                                            </Typography>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            <Container maxWidth="md" component="footer" className={classes.footer}>
                <Box mt={5}>
                    <Copyright/>
                </Box>
            </Container>

        </React.Fragment>
    );
}
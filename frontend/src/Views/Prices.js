import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
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
import NavBar from "./NavBar";
import update from "react-addons-update";
import {Nav} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

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
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
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
        price: '0',
        description: [
            'Basic services included',
            'No hotel points multiplier',
            'Help center access',
            'Email support'
        ],
        buttonText: 'Sign up for free',
        buttonVariant: 'outlined',
        tierVIP: 1
    },
    {
        title: 'Premium',
        subheader: 'Most popular',
        price: '15',
        description: [
            'Premium services included',
            '50% hotel points multiplier',
            'Help center access',
            'Priority email support',
        ],
        buttonText: 'Get started',
        buttonVariant: 'contained',
        tierVIP: 2
    },
    {
        title: 'VIP',
        price: '30',
        description: [
            'VIP services included',
            '100% hotel points multiplier',
            'Help center access',
            'Phone & email support',
        ],
        buttonText: 'I want it!',
        buttonVariant: 'outlined',
        tierVIP: 3
    },
];

/*const footers = [
    {
        title: 'Concierge',
        description: ['Team', 'History', 'Contact us', 'Locations'],
    },
    {
        title: 'Features',
        description: ['Something', 'I dont know', 'What to write', 'In this part', 'I am tired'],
    },
    {
        title: 'Resources',
        description: ['Resource 1', 'Resource name', 'Another resource', 'Final resource'],
    },
    {
        title: 'Legal',
        description: ['Privacy policy', 'Terms of use'],
    },
];*/

export default function Prices(props) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline/>
            <NavBar/>

            <Container maxWidth="sm" component="main" className={classes.heroContent}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Prices
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" component="p">
                    Select the type of user that best suits your needs and start an adventure among our wide variety of
                    services
                </Typography>
            </Container>

            <Container maxWidth="md" component="main">
                <Grid container spacing={5} alignItems="flex-end">
                    {tiers.map((tier) => (

                        <Grid item key={tier.title} xs={12} sm={6} md={4}>
                            <Card>
                                <CardHeader
                                    title={tier.title}
                                    subheader={tier.subheader}
                                    titleTypographyProps={{align: 'center'}}
                                    subheaderTypographyProps={{align: 'center'}}
                                    action={tier.title === 'Regular' ? <StarIcon/> : null}
                                    className={classes.cardHeader}
                                />
                                <CardContent>
                                    <div className={classes.cardPricing}>
                                        <Typography component="h2" variant="h3" color="textPrimary">
                                            {tier.price}€
                                        </Typography>
                                        <Typography variant="h6" color="textSecondary">
                                            /mo
                                        </Typography>
                                    </div>
                                    <ul>
                                        {tier.description.map((line) => (
                                            <Typography component="li" variant="subtitle1" align="center" key={line}>
                                                {line}
                                            </Typography>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardActions className={classes.cardPricing}>
                                    <LinkContainer to="/profile/">
                                        <Nav.Link>
                                            <Button
                                                fullWidth
                                                variant={tier.buttonVariant}
                                                color="primary"
                                                onClick={() => {
                                                    let bill = props.client.profile.bill
                                                    let newClient = update(props.client, {
                                                        profile: {
                                                            bill: {
                                                                $apply: function () {
                                                                    return parseInt(bill) + parseInt(tier.price);
                                                                }
                                                            }
                                                        },
                                                        tierVIP: {$set: tier.tierVIP}
                                                    });
                                                    props.update(newClient);
                                                    alert("Your tier and bill have been updated")
                                                }}>
                                                {tier.buttonText}
                                            </Button>
                                        </Nav.Link>
                                    </LinkContainer>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            <Container maxWidth="md" component="footer" className={classes.footer}>
                {/*<Grid container spacing={4} justify="space-evenly">
                    {footers.map((footer) => (
                        <Grid item xs={6} sm={3} key={footer.title}>
                            <Typography variant="h6" color="textPrimary" gutterBottom>
                                {footer.title}
                            </Typography>
                            <ul>
                                {footer.description.map((item) => (
                                    <li key={item}>
                                        <Link href="/" variant="subtitle1" color="textSecondary">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Grid>
                    ))}
                </Grid>*/}
                <Box mt={5}>
                    <Copyright/>
                </Box>
            </Container>

        </React.Fragment>
    );
}
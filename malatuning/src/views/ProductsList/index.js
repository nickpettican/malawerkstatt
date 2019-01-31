import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import productsData from "../../config/guruperlen_stupa_products.min.json";

import styles from "./styles";

const sortDescending = (arrayOfObjects, key) => arrayOfObjects.sort((a, b) => b[key] - a[key]);

class ProductList extends Component {
  render() {
    let { classes } = this.props;

    const renderProduct = (
      { title, description, url, price, price_num, size, size_num, img_url },
      index
    ) => (
      <Grid item key={index} sm={6} md={4} lg={3}>
        <Card className={classes.card}>
          <CardMedia className={classes.cardMedia} image={img_url} title={title} />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h6" component="h2">
              {title}
            </Typography>
            <Typography gutterBottom>{description}</Typography>
            <Typography gutterBottom variant="h6">
              {price}
            </Typography>
          </CardContent>
          <CardActions>
            <Button href={url} size="small" color="primary">
              View
            </Button>
            <Button size="small" color="primary">
              {size}
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );

    const productsSorted = sortDescending(productsData, "size_num");

    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <ShoppingBasket className={classes.icon} />
            <Typography variant="h6" color="inherit" noWrap>
              Guru beads and stupas
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          {/* Hero unit */}
          <div className={classes.heroUnit}>
            <div className={classes.heroContent}>
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Guru beads and stupas
              </Typography>
              <Typography align="center" color="textSecondary" paragraph>
                We carry more than 150 different varieties of cucumber beads with stupas in
                different sizes A Stet consists of a Guruperle and a Stupa.
              </Typography>
              <Typography align="center" color="textSecondary" paragraph>
                A Mala without Guruperle and Stupa is not a Mala, just a necklace.
              </Typography>
              <Typography align="center" color="textSecondary" paragraph>
                The Guruperle has 3 holes. Pearls with only one hole are just final pearls. For
                every Mala belongs a real Guruperle, so 3 holes and a stupa! The Guruperle and the
                stupa symbolize Buddha's enlightenment spirit. When we arrive at the Guruperle while
                meditating, we turn over the Mala. We do not go over the Guruperle with Stupa over
                it.
              </Typography>
              <Typography align="center" color="textSecondary" paragraph>
                The Guruperle and the stupa symbolize Buddha's enlightenment spirit. When we arrive
                at the Guruperle while meditating, we turn over the Mala. We do not go over the
                Guruperle with Stupa over it.
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={16} justify="center">
                  <Grid item>
                    <Button
                      href="https://www.malawerkstatt.de/epages/61255242.sf/de_DE/?ViewAction=View&ObjectID=53284986&PageSize=60&Page=1"
                      variant="contained"
                      color="primary"
                    >
                      Original page
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
          <div className={classNames(classes.layout, classes.cardGrid)}>
            {/* End hero unit */}
            <Grid container spacing={40}>
              {productsSorted.map(renderProduct)}
            </Grid>
          </div>
        </main>
        {/* Footer */}
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            A better Malawerkstatt
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Beautiful, elegant and only showing what is needed
          </Typography>
        </footer>
        {/* End footer */}
      </React.Fragment>
    );
  }
}

ProductList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductList);

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './BurgerIngredient.css';

class BurgerIngredient extends Component {
  render () {
    let ingredient = null;
  
    switch(this.props.type) {
      case ('bread-bottom'):
        ingredient = <div className={classes.BreadBottom}></div>;
        break;
  
      case ('bread-top'):
        ingredient = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1}></div>
            <div className={classes.Seeds2}></div>
          </div>
        );
        break;
  
      case ('patty'):
        ingredient = <div className={classes.Patty}></div>;
        break;
      
      case ('cheese'):
        ingredient = <div className={classes.Cheese}></div>;
        break;
      
      case ('salad'):
        ingredient = <div className={classes.Salad}></div>;
        break;
      
      case ('extras'):
        ingredient = <div className={classes.Extras}></div>;
        break;
  
      default:
        ingredient = null;
    }

    return ingredient;
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredient;
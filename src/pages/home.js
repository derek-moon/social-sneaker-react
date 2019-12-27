import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";

import Profile from "../components/Profile";

import Scream from "../components/Scream";

import { connect } from "react-redux";
import { getScreams } from "../redux/actions/dataActions";

class home extends Component {
  componentDidMount() {
    this.props.getScreams();
  }
  render() {
    const { screams, loading } = this.props.data;
    let recentScreamsMarkup = !loading ? (
      screams.map(scream => <Scream key={scream.screamId} scream={scream} />)
    ) : (
      <p>Loading...</p>
    );
    return (
      <Grid container spacing={10}>
        <Grid item sm={6} xs={8}>
          {recentScreamsMarkup}
        </Grid>

        <Grid item sm={4} xs={10}>
          <Profile />
        </Grid>
      </Grid>
    );
  }
}

home.propTypes = {
  getScreams: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

//data reducer puts data in the dataobject
const mapStateToProps = state => ({
  data: state.data
});

export default connect(mapStateToProps, { getScreams })(home);

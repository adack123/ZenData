import React from 'react';
import './Dashboard.css';
import { connect } from 'react-redux';
import { requestProfileBlob } from '../../actions';
import { withRouter } from 'react-router';
import Header from '../../components/Header';
import LeftNav from '../../components/LeftNav';
import CircularProgress from 'material-ui/CircularProgress';

class Dashboard extends React.Component {
  componentDidMount() {
    const { requestProfile, profileName } = this.props;
    requestProfile(profileName);
  }
  render() {
    const { profile, fetching, profileName } = this.props;
    return(
    <div>
    {profile.length > 0 &&
      <div>
        <Header
          profile={profile}
          name={profileName}
        />
        <LeftNav/>
        </div>
      }
    </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    profile: state.dashboard.profile,
    fetching: state.dashboard.fetching,
    profileName: ownProps.params.battlenet,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestProfile: (profileName) => {
      dispatch(requestProfileBlob(profileName))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));

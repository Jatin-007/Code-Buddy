import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import connect from 'react-redux';
import {auth, googleAuthProvider} from '../../../firebase/config';
// import {userTypeAction } from '../actions/actions';

import {withRouter} from 'react-router';

export default class GoogleAuthSignIn extends Component {

    render (){
        console.log('asmdjashdj')
        // const {history} = this.props;
        return (
            <div 
            onClick={() => {
                auth.signInWithPopup(googleAuthProvider).then(
                    authUser => {
                        console.log(authUser);
                        // this.props.userTypeAction(authUser.email);
                    }
                )
            }}
            >
                GOOGLE
            </div>
        )
    }
}
// const mapDispatchToProps = dispatch => {
//     return {
//         userTypeAction: (email) => {
//             dispatch(userTypeAction(email))
//         }
//     }
// }


// export default connect({}, mapDispatchToProps)(GoogleAuthSignIn);

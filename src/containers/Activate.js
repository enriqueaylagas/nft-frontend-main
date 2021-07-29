import React,{useState} from 'react';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import { verify } from '../actions/auth';
import placeholder from '../img/image0.jpeg'

const Activate = ({verify, match})  =>{
        const [verified, setverified] = useState(false);

        const verify_account = e => {
            const uid = match.params.uid;
            const token = match.params.token;

            verify(uid, token);

            setverified(true)



        };

        if (verified){
            return <Redirect to= '/'/>
        }

        return(
            <div className = 'container mt-5'>
                <div 
                className ='d-flex flex-column justify-content-center align-items-center'
                style={{marginTop: '200px'}}
                >   
                    <h1><img src={placeholder} class="rounded mx-auto d-block" /></h1>
                    <h1> Verify your Account</h1>
                    <button
                        onClick = {verify_account}
                        style = {{marginTop : '50px'}}
                        type = 'button'
                        className = 'btn btn-primary'
                    >



                    </button>

                </div>
            </div>
        )

};

export default connect(null,{verify})(Activate);
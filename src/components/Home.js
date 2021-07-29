import React from 'react';
import { Link } from 'react-router-dom';
import placeholder from '../img/image0.jpeg'

const Home = ()  =>(

    <div className = 'container'>
        <h1><img src={placeholder} class="rounded mx-auto d-block" /></h1>
        <div class='jumbotron mt-5'>
            
            <h1 class='display-4'>Welcome to Nfties</h1>
            <p class='lead'>This is a this is an NFT Marketplace that will simplify the creation, the sales, and the pruchase of NFT's like no other marketplace .</p>
            <hr class='my-4'/>
            <p>Log in for more or create an account if you haven't.</p>
            <p class='lead'>
                <Link class='btn btn-primary btn-lg' to='/login' role='button'>Login</Link>
            </p>
        </div>

    </div>

);

export default Home;
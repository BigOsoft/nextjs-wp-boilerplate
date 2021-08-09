import MainLayout from '../layouts/mainLayout'
import React, {useEffect, useState} from 'react'
import {Grid} from "@material-ui/core";
import {exampleRequest} from "../wc/index";

const Home = () => {
    return (
        <MainLayout>
            <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
            >
                <Grid item xs={3}>
                    <img src={"wc-logo.png"} width={"100%"} />
                </Grid>
                <Grid item xs={3}>
                    <img src={"next-js.svg"} width={"100%"} />
                </Grid>
                <Grid item xs={3}>
                    <img src={"wp-logo.png"} width={"100%"} />
                </Grid>
            </Grid>
            <div style={{ color: 'white', textAlign: 'center' }}>
                <h2>Welcome to NextJS + Wordpress + WooCommerce Boilerplate</h2>
                <p>Start by editing pages/index.ts</p>
            </div>
        </MainLayout>
    )
}

export const getServerSideProps  = async() => {
    exampleRequest().then(res=>console.log(res))
    return {
       props: {}
    }
}

export default Home

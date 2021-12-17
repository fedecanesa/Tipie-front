import React, { useContext, useEffect, useState } from 'react';
import { Layout, Table } from '../../components';
import { Redirect } from 'react-router-dom';
import ProviderContext from "../../context/UserContext";
import { UseGetTable } from '../../services/Table'

import './Home.scss';

const Home = () => {
    const { user } = useContext(ProviderContext);
    const [db, setData] = useState();
    const getTableDb = () => UseGetTable(setData);

    useEffect(() => {
        getTableDb()
    }, [])

    return (
        user
            ? (
                <Layout>
                    {
                        db && (
                            <Table db={db} />
                        )
                    }
                </Layout>
            )
            : (
                <Redirect to="/" />
            )


    )
}

export default Home;

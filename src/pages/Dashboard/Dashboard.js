import React, { useEffect, useState } from "react";
import "./Dashboard.css"

import axios from "axios";

const Dashboard = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const [count, setCount] = useState({
        UniversityCount: ""
    })
    console.log('universitycount', count)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/v1/getalluniversity');
                console.log(response?.data?.data?.university?.length)
                setCount(prevFormData => ({
                    ...prevFormData,
                    UniversityCount: response?.data?.data?.university?.length
                })


                )
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="Dashboard">
            <div className="row">
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="content-tec">
                                <h1>Universities</h1>
                                <h3>{count?.UniversityCount}</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="content-tec">
                                <h1>Student</h1>
                                <h3>456</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="content-tec">
                                <h1>Student Placed</h1>
                                <h3>456</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="content-tec">
                                <h1>Leads</h1>
                                <h3>456</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="content-tec">
                                <h1>Images</h1>
                                <h3>456</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="content-tec">
                                <h1>Abroad</h1>
                                <h3>456</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

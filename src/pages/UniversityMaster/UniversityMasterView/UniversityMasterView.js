import React, { useEffect, useState } from "react";
import axios from "axios";
import './UniversityMasterView.css'
import Loader from "../../../components/Loader/loader";

const UniversityMasterView = () => {
    const [University, setUniversity] = useState([])
    const [load, setLoad] = useState(false)

    // console.log('ooooooo', University)
    const id = sessionStorage.getItem('uni_id');

    const fetchDataCorses = async () => {
        try {
            const response = await axios.get(`https://api.123admissions.com/api/v1/getuniversity?id=${id}`, {

            });
            setUniversity(response?.data?.data?.university)
            setLoad(true)

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {
        fetchDataCorses()
    }, []);
    return (
        <>
            {load ? <div className="UniversityMasterView">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="header-top">
                            <h4>University View</h4>
                        </div>
                        <div className="universityMasterviewBody">
                            <div className="row">
                                <div className="col-12">
                                    <h5>{University[0]?.universityName}</h5>
                                </div>
                                <div className="col-6">
                                    <img src={'https://api.123admissions.com' + University[0]?.uploadPathcollegeImage}></img>
                                </div>
                                <div className="col-6">
                                    <h5>Discretion</h5>
                                    <p>{University[0]?.content}</p>
                                </div>
                                <div className="col-12 mt-3">
                                    <h5>University Logo</h5>
                                    <div className="row">
                                        <div className="col-2">
                                            <img style={{ width: "100%" }} src={'https://api.123admissions.com' + University[0]?.uploadUniversityLogo}></img>
                                        </div>
                                        <div className="col-4">
                                            <button className="btn btn-primary w-100" onClick={async () => {
                                                const response = await fetch('https://api.123admissions.com' + University[0]?.uploadUniversityLogo);
                                                const blob = await response.blob();
                                                const link = document.createElement('a');
                                                link.href = URL.createObjectURL(blob);
                                                link.download = 'Maninipal_Logo.png';
                                                document.body.appendChild(link);
                                                link.click();
                                                document.body.removeChild(link);
                                            }}>Download Logo</button>
                                        </div>
                                        <div className="col-6">
                                            <a href="https://admissionsmanipal.com/" target="_black">{University[0]?.universityName}</a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div> : <Loader />}
        </>
    )
}
export default UniversityMasterView
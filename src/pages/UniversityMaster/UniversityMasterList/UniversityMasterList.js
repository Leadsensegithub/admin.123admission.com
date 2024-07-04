import React, { useEffect, useState } from "react";
import axios from "axios";
import './UniversityMasterList.css'
import Loader from "../../../components/Loader/loader";
import { useNavigate } from "react-router-dom";


const UniversityMasterList = () => {
    const [University, setUniversity] = useState([])
    const [load, setLoad] = useState(false)
    const [apiload, setApiload] = useState(1)
    console.log(apiload)


    const fetchDataCorses = async () => {
        setLoad(false)
        try {
            const response = await axios.get(`https://api.123admissions.com/api/v1/getalluniversity?Key=India&type=${apiload}`, {

            });
            setUniversity(response?.data?.data?.university)
            setLoad(true)

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {
        fetchDataCorses()
    }, [apiload]);
    const Navigate = useNavigate()
    const handleClick = (value) => {

        sessionStorage.setItem('uni_id', value);
        Navigate('/UniversityMasterList/UniversityMasterView')

    };
    const onclickToogle = (id) => {
        setApiload(id)

    }
    const OnclickNew = () => {
        Navigate('/UniversityMasterList/UniversityMasterCreate')
    }
    return (
        <>
            <>

            </>
            {load ? <div className="UniversityMasterList">
                <div className="row">
                    <div className="col-lg-12 col-12">
                        <div className="header-top">
                            <h4>University Master</h4>
                            <button className="btn btn-primary" onClick={OnclickNew} >Add New</button>
                        </div>
                    </div>
                    <div className="col-lg-12 col-12">
                        <div className="toggle">
                            <button className={apiload == 2 ? "" : "active"} onClick={() => onclickToogle(1)}>India</button>
                            <button className={apiload == 1 ? "" : "active"} onClick={() => onclickToogle(2)}>Abroad</button>
                        </div>
                    </div>
                    <div className="col-lg-12 col-12">
                        <div className="exp">
                            {University.map((d) => (<div className="item">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-12">
                                                <p>{d?.universityName}</p>
                                            </div>
                                            <div className="col-12">
                                                <div className="header">
                                                    <img src={'https://api.123admissions.com' + d?.uploadPathcollegeImage}></img>
                                                    <div className="logo">
                                                        <img src={'https://api.123admissions.com' + d?.uploadUniversityLogo}></img>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="location">
                                                    <p>{d?.location}</p>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="university-des">
                                                    <button onClick={() => handleClick(d?.id)}>View</button>
                                                    <button>Edit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>))}
                        </div>
                    </div>
                </div>
            </div> : <Loader />}
        </>)
}
export default UniversityMasterList 
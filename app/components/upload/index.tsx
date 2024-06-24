"use client";
import axios from "axios";
import React, { useEffect, useState } from 'react';

export default function Upload() {
    const [systemInfo, setSystemInfo] = useState({});
    useEffect(() => {
        axios.get('/api/run-python').then((res) => {
            console.log(res);
            setSystemInfo(res.data.system_info || {});
        })
    }, [])
    return (
        <div>
            <h1 style={{ color: "red", fontSize: "36px" }}>python script back infos: </h1>
            <pre>{JSON.stringify(systemInfo, null, 2)}</pre>
        </div >
    );
}
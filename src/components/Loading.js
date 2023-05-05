import React from 'react';
import { ClipLoader } from 'react-spinners';
import './Loading.css';

export default function Loading(props) {
    return (
        <div className={`loader-container ${props.loading ? "" : "d-none"}`}>
          <ClipLoader loading={props.loading} color={'#fff'} size={150} />
        </div>
    )
}

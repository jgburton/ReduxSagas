import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDog } from '../redux/actions/dog';

const Image = () => {
    const dispatch = useDispatch();
    const dog = useSelector(state => state.dog.dog);
    const loading = useSelector(state => state.dog.loading);
    const error = useSelector(state => state.dog.error);

    return (
        <>
             <button onClick={() => dispatch(getDog())} style={{ margin: '10px' }} type="button" className="btn btn-primary">Request a Dog...</button>
             <br />
            {loading && <p style={{ marginLeft: '10px' }}>Loading...</p>}
            {dog && <img style={{ marginLeft: '10px', maxHeight: '300px' }} src={dog} className="img-fluid" alt="Responsive Dog"></img>}
            {error && !loading && <p style={{ marginLeft: '10px' }}>{error}</p>}

        </>
    )
}

export default Image;
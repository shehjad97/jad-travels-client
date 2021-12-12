import React from 'react';

const Loading = () => {
    return (
        <>
            <div className="d-flex justify-content-center text-danger text-center py-2">
                <div>
                    <div className="mt-2 ms-2 spinner-border fs-3" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    <h3>Please Wait</h3>
                </div>
            </div>
        </>
    );
};

export default Loading;
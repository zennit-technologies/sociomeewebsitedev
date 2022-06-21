import React from 'react'

const AdsTopComponents = () => {
    return (
        <>
            <section id="adCom">
                <div className="container-fluid">
                    <div className="col-lg-12 col-md-12 col-sm-4">
                        <div className="row" style={{flexWrap: "unset"}}>
                            <div className="col-lg-4 col-md-4 col-sm-12 com">
                                <h3>Wallet</h3>
                                <hr />
                                <div className="funds cus-flex mb-3">
                                    <h3>Available Funds</h3>
                                    <h3>$ 12300</h3>
                                </div>
                                <div className="Freeze cus-flex mb-2" >
                                    <div className="Freeze-in ">
                                        <h4>Freeze Amount</h4>
                                        <small>Total Freeze Amount calculated on All Ads</small>
                                    </div>
                                    <h3>$ 12300</h3>
                                </div>
                                <button className='btn btn-solid'>Add Funds</button>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 com">
                                <h3>Ad Count</h3>
                                <hr />
                                <div className="funds cus-flex mb-3">
                                    <h3>Total Ad Count</h3>
                                    <h3>27</h3>
                                </div>
                                <div className="Freeze cus-flex mb-2">
                                    <div className="Freeze-in">
                                        <div className="count cus-flex mb-2">
                                            <h4>Running</h4>
                                            <h4>27</h4>
                                        </div>
                                        <div className="count cus-flex mb-2">
                                            <h4>Drafted</h4>
                                            <h4>27</h4>
                                        </div>
                                        <div className="count cus-flex mb-2">
                                            <h4>Aproval Pending</h4>
                                            <h4>27</h4>
                                        </div>
                                    </div>
                                    <div className="Freeze-in">
                                        <div className="count cus-flex mb-2">
                                            <h4>Paused</h4>
                                            <h4>27</h4>
                                        </div>
                                        <div className="count cus-flex mb-2">
                                            <h4>Completed</h4>
                                            <h4>27</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 com">
                                <h3>Transaction Summary</h3>
                                <hr />
                                <div className="funds cus-flex mb-3">
                                    <h3>Total Spent</h3>
                                    <h3>$ 12300</h3>
                                </div>
                                <div className="Freeze cus-flex mb-2">
                                    <div className="Freeze-in">
                                        <h4>Last Transaction</h4>
                                        <small>Show last 5 transactions</small>
                                    </div>
                                    <h3>$ 12300</h3>
                                </div>
                                <button className='btn btn-solid'>View Transaction</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AdsTopComponents
import React, { Component } from "react";

export default class MainContent 
extends Component
{

    state={ 
        pageTitle: "Customers", 
        customersCount: 5,
        customers: [
            {id:1, name: "Emily", phone: "123-1234", address: { city: "Richmond" }},
            {id:2, name: "Forest", phone: "234-5678", address: { city: "Richmond" }},
            {id:3, name: "Shanisse", phone: "345-6789", address: { city: "Richmond" }},
            {id:4, name: "Taylor", phone: null, address: { city: "Richmond" }},
            {id:5, name: "Savannah", phone: "102-9384", address: { city: "Richmond" }},
        ]
    };
    render()
    {
        return<div>
            <h4 className="m-1 p-1">{this.state.pageTitle}

            <span class="badge badge-secondary m-2">{this.state.customersCount}</span>

            <button className="btn btn-info" onClick={this.onRefreshClick}>Refresh</button>
            </h4>

            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Customer Name</th>
                        <th>Phone</th>
                        <th>Address</th>
                    </tr>
                </thead>
                    <tbody>{this.getCustomerRow()}</tbody>
            </table>
        </div>;
    }
    // executes when refresh button is clicked - doesn't currently work
    onRefreshClick = () => {
        this.setState({
            customersCount: 7});
    };

    getPhoneToRender = (phone) => {
        if(phone)
        return phone;
        else {
            return <div className="bg-warning p-2 text-center">"No Phone"</div>;
        }  
    }

    getCustomerRow = () => {
       return (this.state.customers.map((cust) => {
            return (
                <tr key={cust.id}>
                <td>{cust.id}</td>
                <td>{cust.name}</td>
                <td>{this.getPhoneToRender(cust.phone)}</td>
                <td>{cust.address.city}</td>
                </tr>
            );
        }));
       }
    }
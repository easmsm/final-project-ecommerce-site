// THIS PAGE NOT ACTIVE, COULD BE USED FOR FUTURE DEVELOPMENT
import React, { Component } from "react";

// using picsum as temporary spaceholder for animal photos, using customer information as placeholder, will need to add to SQL, hardcoding is temporary
//customers should be in the database

export default class CustomersList
extends Component
{
    state={ 
        pageTitle: "Pet Parents", 
        // customersCount: 5,
        customers: [
            {id:1, name: "Emily", phone: "123-1234", address: { city: "Richmond" }, photo:"https://picsum.photos/id/1010/60", pet: "Amaretti"},
            {id:2, name: "Forest", phone: "234-5678", address: { city: "Richmond" }, photo:"https://picsum.photos/id/1011/60", pet: "Iroh"},
            {id:3, name: "Shanisse", phone: "345-6789", address: { city: "Richmond" }, photo:"https://picsum.photos/id/1012/60", pet: "Samwise"},
            {id:4, name: "Taylor", phone: null, address: { city: "Richmond" }, photo:"https://picsum.photos/id/1013/60", pet: "Eta"},
            {id:5, name: "Savannah", phone: "102-9384", address: { city: "Richmond" }, photo:"https://picsum.photos/id/1014/60", pet: "Hiro"},
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
                        <th>Photo</th>
                        <th>#</th>
                        <th>Customer Name</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Pet</th>
                    </tr>
                </thead>
                    <tbody>{this.getCustomerRow()}</tbody>
            </table>
        </div>;
    }
    // executes when refresh button is clicked - doesn't currently work
    // onRefreshClick = () => {
    //     this.setState();
    // };

    getPhoneToRender = (phone) => {
        if(phone)
        return phone;
        else {
            return <div className="bg-warning p-2 text-center">"No Phone"</div>;
        }  
    }

    getCustomerRow = () => {
       return (this.state.customers.map((cust, index) => {
            return (
                <tr key={cust.id}>
                <td><img src={cust.photo} alt="Customer" />
                <div>
                    <button className="btn btn-sm btn-secondary" onClick={() => {this.onChangePictureClick(cust, index);}}>Change Image</button>
                </div>
                </td>
                <td>{cust.id}</td>
                <td>{cust.name}</td>
                <td>{this.getPhoneToRender(cust.phone)}</td>
                <td>{cust.address.city}</td>
                </tr>
            );
        }));
       };

//temporarily hardcoding
//executes when the user clicks on "Change Picture" button in the grid
//receives the "customer" object and index of the currently clicked customer
       onChangePictureClick = (cust, index) => {
            // console.log(cust);
            // console.log(index);

            //get existing customer
           var custArr = this.state.customers;
           custArr[index].photo = "https://picsum.photos/id/1015/60";

           //update "customers" array in the state
           this.setState({ customers: custArr }); 
       };
    }
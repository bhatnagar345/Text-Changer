
import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Iform = () => {
    const [name, setname] = useState({
        fname: "",
        lname: "",
        Eid: "",
        number: ""
    });
    // const onSubmits = (event) => {
    //     event.preventDefault();
    // };
    const changing = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        setname((preValue) => {
            return {
                ...preValue,
                [name]: value
            }

            // if (name === "fname") {
            //     return {
            //         fname: value,
            //         lname: preValue.lname,
            //         Eid: preValue.Eid,
            //         number: preValue.number
            //     };
            // }
            // if (name === "lname") {
            //     return {
            //         lname: value,
            //         fname: preValue.fname,
            //         Eid: preValue.Eid,
            //         number: preValue.number
            //     };
            // }
            // if (name === "Eid") {
            //     return {
            //         lname: preValue.lname,
            //         fname: preValue.fname,
            //         Eid: value,
            //         number: preValue.number
            //     };
            // }
            // if (name === "number") {
            //     return {
            //         number: value,
            //         fname: preValue.fname,
            //         Eid: preValue.Eid,
            //         lname: preValue.lname
            //     };
            // }
        });

    };
    const submits = () => {
        if(name.number.length === 0)
        alert("Please Write Something");
        else if(name.Eid.length === 0)
        alert("PLease write your email-id");
        else
        alert(`Thank You ${name.fname} ${name.lname} For Contacting your message "${name.number}" is delivered`);
    }
    return (
        <>

              <div className ="container">
              <h1>Fill this Form </h1>
            <div className="row">
                <div class="col">
                    <input type="text" class="form-control" placeholder="First name" aria-label="First name" onChange={changing}
                        name="fname"
                        value={name.fname} />
                </div>
                <div class="col">
                    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" onChange={changing}
                    name="lname"
                    value={name.lname} />
                </div>
            </div>
            <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">E-mail ID</label>
                <input type="email" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" onChange={changing}
                    name="Eid"
                    value={name.Eid}/>
            </div>
            <div class="mb-4">
                <label for="formGroupExampleInput2" class="form-label">Your Message</label>
                <textarea class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder" onChange={changing}
                    name="number"
                    value={name.number} />
            </div>
            <div class=" mx-auto" >
                {/* <label for="formGroupExampleInput" class="form-label">E-mail ID</label> */}
                <button type="button" className="btn btn-primary mx-1" onClick={submits}>Submit</button>
            </div>

            
            </div>
            {/* <h1> Hello!!  </h1>
            <p>
                {name.fname} {name.lname}
            </p>
            {name.Eid}
            <p>
                <p>
                    {name.number}
                </p>
            </p>
            <form onSubmit={onSubmits}>
                <input type="text" placeHolder="Enter Your FirstName" onChange={changing}
                    name="fname"
                    value={name.fname}
                />
                <br />
                <br />
                <input type="text" placeHolder="Enter Your LastName" onChange={changing}
                    name="lname"
                    value={name.lname}
                />
                <br />
                <br />
                <input type="email" placeHolder="Enter Your email" onChange={changing}
                    name="Eid"
                    value={name.Eid}
                />
                <br />
                <br />
                <input type="text" placeHolder="Enter Your number" onChange={changing}
                    name="number"
                    value={name.number}
                />
                <br />
                <input type="submit" onClick={submits} />
            </form> */}

        </>
    );
};

export default Iform;
import React, { useState } from 'react';
import Navbar from './Navbar';
import Form from './Form';
import Alert from './Alert';
import Iform from './Iform';
import { Route, Switch } from 'react-router-dom';


const App = () => {
    const [mode, setmode] = useState("light");
    const [alert, setalert] = useState(null);
    const [num, setnum] = useState(0)

    let showalert = (msg, type) => {
        setalert({
            msg: msg,
            type: type
        })
        setTimeout(() => {
            setalert(null);
        }, 1500);
    }

    const threecolor = (id) => {
        if (id === 1) {
            document.body.style.backgroundColor = '#b23636';
            showalert("Red theme is enabled", "success");
            setnum(1);
            // setmode('dark');
        }
        if (id === 2) {
            document.body.style.backgroundColor = '#d3d31e';
            showalert("Yellow theme is enabled", "success");
            // setmode('dark')
            setnum(1);
        }
        if (id === 3) {
            document.body.style.backgroundColor = 'Green';
            showalert("Green theme is enabled", "success");
            setnum(1);
        }
    }



    const togglemode = () => {
        if (mode === 'light') {
            setmode('dark');
            document.body.style.backgroundColor = '#0a327d';
            showalert("darkmode is enabled", "success");
        }
        else {
            setmode('light');
            document.body.style.backgroundColor = 'white';
            showalert("lightmode is enabled", "success");
            setnum(0);
        }
    };
    return (
        <>
                <Navbar mode={mode} togglemode={togglemode} threecolor={threecolor} num={num} />
                <Alert alert={alert} />
            <Switch>
                    <Route path="/contact">
                        <Iform />
                    </Route>

                    <Route path="/">
                        <div className="container">
                            <Form mode={mode} showalert={showalert} />
                        </div>
                    </Route>
                </Switch>
        </>
    );
}

export default App;
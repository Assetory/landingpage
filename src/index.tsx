import React from "react";
import ReactDOM from "react-dom";

class HelloMessage extends React.Component
{
    render()
    {
        return(
            <div>
                <li>
                    <a href="/ip">Link to ip test</a>
                </li>
                <li>
                    <a href="/dashboard">Link to dashboard</a>
                </li>
            </div>
        );
    }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<HelloMessage />, mountNode);


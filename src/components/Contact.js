import React from "react";
import { func } from "prop-types";


export default function Contact(){
    return (
        <div class="container float-left margin">
            <div class="row">
                <div class="col-md-8">
                    <div class="block padding">
                        <h3 class="textcolor block-header">Contact</h3>
                        <p>Cell: (952) 649-1562</p>
                        <p>Email: abazrafshan123@gmail.com</p>
                        <hr/>
                        {/* User can input a name in this box */}
                        <div class="form-group">
                            <label for="formGroupExampleInput">Name</label>
                            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Your name"/>
                        </div>
                        {/* User can input an email address in this box */}
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Email@address.com"/>
                        </div>
                        {/* User can input a message in this box */}
                        <div class="form-group">
                            <label for="msg">Message</label>
                            <div >
                                <textarea id="msg" class="form-control" rows="3" placeholder="Message"></textarea>
                            </div>
                        </div>
                        {/* User can submit contact info by pressing the button */}
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

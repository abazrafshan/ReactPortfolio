import React from "react";

export default function Portfolio(){
    return(
        <div class="container float-left margin" style="margin-bottom: 100px;">
        <div class="row">
            <div class="col-md-8">
                <div class="block padding">
                <h3 class="textcolor ">Portfolio</h3>
                <hr/>
                {/* Responsive sizing to display portfolio images and associated banners */}
                <div class="row">
                    <div class="col-sm-6 col-md-12 col-lg-6">
                        <a href = "https://morning-earth-32122.herokuapp.com/game"><img src="../Assets/Images/thievesmonopoly.png" alt="Thieves Monopoly" class="card-img img-fluid thumbnail"/></a>
                        <h3 class="banner"><a href = "https://github.com/abazrafshan/Project2Game">Thieves Monopoly</a></h3>
                    </div>
                    <hr/>
                    <div class="col-sm-6 col-md-12 col-lg-6">
                        <a href = "https://abazrafshan.github.io/YouMDb-Movie-App/"><img src="../Assets/Images/YouMDb.png" alt="YouMDb" class="card-img img-fluid thumbnail"/></a>
                        {/* banner class provides responsive sizing of banner width to closely align with thumbnail width, along with aesthetic enhancements */}
                        <h3 class="banner"><a href = "https://github.com/abazrafshan/YouMDb-Movie-App">YouMDb Movie App</a></h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6 col-md-12 col-lg-6">
                        <a href = "https://abazrafshan.github.io/WeatherDashboard/"><img src="../Assets/Images/weather.png" alt="Weather Dashboard" class="card-img img-fluid thumbnail"/></a>
                        <h3 class="banner"><a href = "https://github.com/abazrafshan/WeatherDashboard">Weather Dashboard</a></h3>
                    </div>
                    <hr/>
                    <div class="col-sm-6 col-md-12 col-lg-6">
                        <a href ="https://shrouded-fjord-25692.herokuapp.com/"><img src="../Assets/Images/Burgerlogger.png" alt="Burger Logger" class="card-img img-fluid thumbnail"/></a>
                        <h3 class="banner"><a href = "https://github.com/abazrafshan/BurgerLogger">Burger Log</a></h3>
                    </div>
                </div>
                <div class="row">
                  <div class="col-sm-6 col-md-12 col-lg-6">
                      <a href = "https://abazrafshan.github.io/Work-Day-Scheduler/"><img src="../Assets/Images/workday.png" alt="Work Day Scheduler" class="card-img img-fluid thumbnail"/></a>
                      <h3 class="banner"><a href = "https://github.com/abazrafshan/Work-Day-Scheduler">Work Day Scheduler</a></h3>
                  </div>
                  <hr/>
                  <div class="col-sm-6 col-md-12 col-lg-6">
                      <a href ="https://abazrafshan.github.io/PasswordGenerator/"><img src="../Assets/Images/passwrodgen.png" alt="Password Generator" class="card-img img-fluid thumbnail"/></a>
                      <h3 class="banner"><a href = "https://github.com/abazrafshan/PasswordGenerator/">Password Generator</a></h3>
                  </div>
              </div>
            </div>
            </div>
        </div>
    <br></br>
    </div>
    )
}
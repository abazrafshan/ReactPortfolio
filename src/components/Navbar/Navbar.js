import React from "react";

export default function Navbar(){
    return (
        <div>
        {/* Responsive navigation bar, directs user to About Me, Portfolio, or Contact page */}
            <nav class="navbar navbar-expand-lg navbar-light ">
            <a class="navbar-brand" href="index.html" id="logo">Arash Bazrafshan</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <span class="navbar-text">
                <ul class="navbar-nav mr-auto">
                    {/* List will redirect user to each of the three pages of this web site */}
                    <li class="nav-item">
                    <a class="nav-link" href="index.html">About Me <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="portfolio.html">Portfolio <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="contact.html">Contact <span class="sr-only">(current)</span></a>
                    </li>
                </ul>
            </span>
          </nav>
        </div>
    )
}
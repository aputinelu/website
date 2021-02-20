import React, { Fragment, Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import HomePageOne from '../Pages/HomePageOne'
import HomePageTwo from '../Pages/HomePageTwo'
import HomePageThree from '../Pages/HomePageThree'
import AboutPage from '../Pages/AboutPage'
import PracticePage from '../Pages/PracticePage'
import PracticeSinglePage from '../Pages/PracticeSinglePage'
import PortfolioPage from '../Pages/PortfolioPage'
import SinglePortfolioPage from '../Pages/SinglePortfolioPage'
import TeamPage from '../Pages/TeamPage'
import SingleTeamPage from '../Pages/SingleTeamPage'
import SingleTeamPage1 from '../Pages/SingleTeamPage1'
import ContactPage from '../Pages/ContactPage'

import './App.css';

class App extends Component {
    render() {
        return (
            <Fragment>
                <BrowserRouter>
                    <ToastContainer autoClose={2500} position="top-center" />
                    <Switch>
                        <Route exact path="/" component={HomePageOne} />
                        <Route exact path="/Home-two" component={HomePageTwo} />
                        <Route exact path="/Home-three" component={HomePageThree} />
                        <Route exact path="/About" component={AboutPage} />
                        <Route exact path="/Practice" component={PracticePage} />
                        <Route exact path="/Practice-details" component={PracticeSinglePage} />
                        <Route exact path="/Case-stadies" component={PortfolioPage} />
                        <Route exact path="/Case-stadies-details" component={SinglePortfolioPage} />
                        <Route exact path="/Attorneys" component={TeamPage} />
                        <Route exact path="/Attorneys-single" component={SingleTeamPage} />
                        <Route exact path="/Attorneys-single1" component={SingleTeamPage1} />
                        <Route exact path="/Contact" component={ContactPage} />
                        
                    </Switch>
                </BrowserRouter>
            </Fragment>
        );
    }
}

export default App;

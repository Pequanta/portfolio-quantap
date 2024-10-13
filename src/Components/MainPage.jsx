
import { useState } from "react";
import styles from "./Components.module.css";
import profilePic from "../assets/image.png";
import logo from "../assets/default.png";
import aby from "../assets/default3.png"
import sece from "../assets/default2.png"
import fs from "../assets/default4.png"
import peng from "../assets/pen.png";
import React from "react";
import { SlSocialReddit } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialGoogle } from "react-icons/sl";
import { FaTelegram } from "react-icons/fa";
import pythonLogo from "../assets/Python.png";
import cLogo from "../assets/C.png";
import javaLogo from "../assets/Java.png";
import goLogo from "../assets/Go.png";
import mongoLogo from "../assets/MongoDB.png";
import mysqlLogo from "../assets/MySQL.png";
import numpyLogo from "../assets/NumPy.png";
import pandasLogo from "../assets/Pandas.png";
import fastapiLogo from "../assets/FastAPI.png";
import insomniaLogo from "../assets/Insomnia.png";
import jupyterLogo from "../assets/Jupyter.png";
import tscriptLogo from "../assets/TypeScript.png";
import reactLogo from "../assets/React.png";
import bootstrapLogo from "../assets/Bootstrap.svg"
import tailwindLogo from "../assets/TailwindCSS.svg"
import gitLogo from "../assets/Git.png"
import linuxLogo from "../assets/Linux.png"
import { MdOutlineBrightness2 } from "react-icons/md";
function MainPage() {
  const moveElementToView = (event, idTag) =>{
    const element = document.getElementById(idTag)
    element.scrollIntoView({behavior: "smooth", block: "start"})
  }
  const [themeValues, setThemeValues] = useState({
    body: "bg-dark", 
    navBarBackground:"bg-dark",
    navBarText: "text-light",
    p: "text-light",
    h1: "text-warning",
  });
  const [theme, setTheme] = useState("dark");
  const changeTheme = () =>{
    if(theme === "dark"){
      setThemeValues({...themeValues,body: "bg-light",  navBarBackground: "bg-light", navBarText: "text-dark" , p:"text-dark", h1: "text-dark"});
      setTheme("light");
    }else{
      setThemeValues({...themeValues, body: "bg-dark bg-gradient", navBarBackground: "bg-dark", navBarText: "text-light" , p:"text-light", h1: "text-light"})
      setTheme("dark");
    }
  }
  return (
    <div className={`${themeValues.body} w-100 ${themeValues.navBarText} d-flex flex-column transition-colors`}>
      <header className="w-100 position-fixed h-20">
        <nav className={`navbar navbar-expand-lg navbar-light ${themeValues.navBarBackground} fs-1 fw-bold border-bottom`}>
          <div className="container-fluid h-25 align-items-center">
            <div className="w-50 d-flex justify-start max-h-25">
              <a className="navbar-brand fs-1 text-warning" onClick={(event) => moveElementToView(event , "#home")}>
              <div className="container align-content-center w-50">
                <img src={logo} className="w-25 rounded-circle"/>
              </div>
    
              </a>
            </div>
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 border-0 d-flex justify-content-around w-100 g-2">
                <li className="nav-item">
                  <a className="nav-link active text-primary link-primary-active" aria-current="home-page" onClick={(event) => moveElementToView(event , "#home")}>Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active text-primary" aria-current="projects-page" onClick={(event) => moveElementToView(event , "#projects")}>Projects</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active text-primary" aria-current="education-page" onClick={(event) => moveElementToView(event , "#education")}>Skills</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active text-primary" aria-current="contacts-page" onClick={(event) => moveElementToView(event , "#contacts")}>Contacts</a>
                </li>
                <li>
                  <button className="bg-transparent border-0" onClick={changeTheme}><MdOutlineBrightness2 className={themeValues.navBarText} /></button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main>
      <div className="d-flex align-items-center w-100 p-4 justify-content-center" id="#home">
        <div className="d-flex align-content-center justify-content-center min-vh-100">
          <div className="container d-flex align-items-center justify-content-end w-100">
            <img src={profilePic} className="w-75"/>
          </div>
          
          <div className="d-flex align-items-center justify-content-center fs-1 fw-1 text-warning w-100 min-vh-100">
            <div className="w-100">
              <h1 className="text-info w-100">
                HI, I am Peniel
              </h1>
              <h1 className=" text-warning w-100">
                I am a Software Developer
              </h1>

            </div>
          </div>
        </div>
      </div>
      <div className={`section d-flex align-items-center w-100 p-4 my-5 ${themeValues.p}`} id="#projects">
        
        <div className="d-flex align-content-center justify-content-center min-vh-100 w-100"> 
          <div className="d-grid align-content-center g-1 py-5">
          <div className="row">
            <div className="col">
            </div>
            <div className="col my-5 d-flex justify-content-center">
              <h1 className="text-warning">Description</h1>
            </div>
            <div className="col">
            <div className="col my-5 d-flex justify-content-center">
              <h1 className="align-self-end text-warning">Tools</h1>
            </div>
            </div>
          </div>
            <hr/>
            <div className="row">
              <div className="col">
                <div className="col d-flex">
                  <img src={aby} className="w-25 rounded-circle mx-5"/>
                  <div className="d-flex flex-column">
                    <span className="fs-1">Abyssinian</span>
                    <p>Githublink: <a href="https://github.com/Pequanta/Abyssinian">Pequanta/Abyssinian</a></p>
                  </div>
                </div>
              </div>
              <div className="col d-flex align-items-center fs-5 fw-1">
                A project in which I aimed to create a public repository with
                public access, consisting of casual chats with their emotive
                meanings. The app has chat section and trend section
              </div>
              <div className="col d-flex align-items-center fs-5 fw-1 justify-content-center">
                Fastapi, React, mongodb, pandas, transformers
              </div>
            <hr/>
            </div>
            <div className="row">
              <div className="col d-flex">
                <img src={sece} className="w-25 rounded-circle mx-5"/>
                <div className="d-flex flex-column">
                  <span className="fs-1">SECE</span>
                  <p>Githublink: <a href="https://github.com/Pequanta/communityPlatform-0.0.1">Pequanta/Community-platform</a></p>
                </div>
              </div>
              <div className="col d-flex align-items-center fs-5 fw-1">
                A group project in which we tried to create a web based platform for
                our department community where the upper class(lecturers and
                researchers) can put their insights for others to read and all users
                can have a discussion on ideas.
              </div>
              <div className="col d-flex align-items-center fs-5 fw-1 justify-content-center">
                  Java EE, Mysql , servlets
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col d-flex">
                <img src={fs} className="w-25 rounded-circle mx-5"/>
                <div className="d-flex flex-column">
                  <span className="fs-1">FS in Java</span>
                  <p>Githublink: <a href="https://github.com/Pequanta/FS_in_java">Pequanta/Fs_in_java</a></p>
                </div>
              
              
              </div>
              <div className="col d-flex align-items-center fs-5 fw-1">
                A filesystem that mimics conventional directory based file access
              </div>
              <div className="col d-flex align-items-center fs-5 fw-1 justify-content-center">
                  Swing
              </div>
            </div>
            <hr/>
          </div>
        </div>
        </div>
        <div className="container d-flex align-items-center w-100 p-4" id="#education">
          <div className={`d-flex align-content-center justify-content-center min-vh-100 w-75 ${themeValues.p}`}>            
            <div className="container align-content-center">
            <div>
                <p className="w-50 fs-1 fw-3">
                Programming Languages
                </p>
                <div className="w-25 d-flex h-25">
                  <img className="w-25" src={pythonLogo} alt="python"/>
                  <img className="w-25" src={javaLogo} alt="python"/>
                  <img className="w-25" src={goLogo} alt="python"/>
                  <img className="w-25" src={tscriptLogo} alt="python"/>
                  <img className="w-25" src={cLogo} alt="python"/>
                </div>
              </div>
              <div className="w-100 d-flex justify-content-center align-content-center flex-column">
                <p className="w-50 fs-1">
                Frameworks & libraries
                </p>
                <div className="w-25">
                  <p>Frontend&Styling</p>
                  <img className="w-25" src={reactLogo} alt="python"/>
                  <img className="w-25" src={bootstrapLogo} alt="python"/>
                  <img className="w-25" src={tailwindLogo} alt="python"/>
                </div>
                <div className="w-25">
                  <p className="my-1">Backend&libraries</p>
                    <img className="w-25" src={fastapiLogo} alt="python"/>
                    <img className="w-25" src={numpyLogo} alt="python"/>
                    <img className="w-25" src={pandasLogo} alt="python"/>
                </div>
              </div>
              <div className="w-100 d-flex justify-content-center align-content-center flex-column">
                <p className="w-50 fs-1">
                Databases
                </p>
                <div className="w-25">
                  <img className="w-25" src={mongoLogo} alt="python"/>
                  <img className="w-25" src={mysqlLogo} alt="python"/>
                </div>
              </div>
              <div>
                <p className="w-50 fs-1 fw-3">
                Other Tools
                </p>
                <div className="w-25 d-flex h-25">
                  <img className="w-25" src={insomniaLogo} alt="python"/>
                  <img className="w-25" src={jupyterLogo} alt="python"/>
                  <img className="w-25" src={gitLogo} alt="python"/>
                </div>
              </div>
              <div className></div>
            </div>
          </div>
          <div className="d-flex align-content-center justify-content-center w-25"> 
            <img src={linuxLogo} alt="linux" />
          </div>
        </div>
        <div className="d-flex align-items-center w-100 px-auto justify-content-center align-content-center ml-1" id="#contacts">
          <div className="d-flex align-content-center justify-content-center min-vh-100 w-100 align-items-center">
            <div className="container d-flex align-content-center align-items-center w-50">
              <img src={peng} className="w-50"/>
              <ul className={`${themeValues.p} w-50`}>
                <h1>Talk to me about</h1>
                <div className="fs-1">
                  <li>Web development</li>
                  <li>Scripting</li>
                  <li>Machine Learning</li>
                  <li><span className="text-warning">Especially </span>Linux</li>
                </div>
              </ul>
            </div>
            
            <div className="container align-content-center w-50">
              <p className="w-100">
                <ul className="list-unstyled fs-1">
                  <li><a className="text-decoration-none text-info" href="https://www.github.com/Pequanta" target="_blank"><SlSocialReddit/><span className="mx-3">Pequanta</span></a></li>
                  <li><a className="text-decoration-none text-info" href="https://www.linkedin.com/in/penielyohannes" target="_blank"><SlSocialLinkedin /><span className="mx-3">Peniel Yohannes</span></a></li>
                  <li><a className="text-decoration-none text-info"><SlSocialGoogle /><span className="mx-3">Penielyohannes6@gmail.com</span></a></li>
                  <li><a className="text-decoration-none text-info" href="https://t.me/degute_r" target="_blank"><FaTelegram /><span className="mx-3">Degute</span></a></li>
                </ul>
              
                
              </p>
            </div>
          </div>
    </div>
      </main>
    </div>
  );
}

export default MainPage;

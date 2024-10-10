import styles from "./Components.module.css";
import profilePic from "../assets/image.png";
import logo from "../assets/default.png";
import aby from "../assets/default3.png"
import sece from "../assets/default2.png"
import React from "react";
import { useState } from "react";
function MainPage() {
  const [page, setPage] = useState("#home")

  const moveElementToView = (event, idTag) =>{
    const element = document.getElementById(idTag)
    element.scrollIntoView({behavior: "smooth", block: "start"})
  }
  return (
    <div className="w-100 bg-dark text-light d-flex flex-column transition-colors">
      <header className="w-100 position-fixed h-20">
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fs-1 fw-bold">
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
                  <a className="nav-link active text-primary" aria-current="education-page" onClick={(event) => moveElementToView(event , "#education")}>Education</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active text-primary" aria-current="contacts-page" onClick={(event) => moveElementToView(event , "#contacts")}>Contacts</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main>
      <div className="d-flex align-items-center w-75 p-4" id="#home">
        <div className="d-flex align-content-center justify-content-center min-vh-100">
          <div className="container align-content-center">
            <img src={profilePic} className="w-75"/>
          </div>
          
          <div className="container align-content-center fs-1 fw-1 text-warning">
            <p className="w-100">
              HI, I am Peniel
            </p>
            <p className="w-100">
              I am a web Developer
            </p>
          </div>
        </div>
      </div>
      <div className="section d-flex align-items-center w-100 p-4 my-5" id="#projects">
        
        <div className="d-flex align-content-center justify-content-center min-vh-100 w-100"> 
          <div className="d-grid align-content-center g-1 py-5">
          <div className="row">
            <div className="col">
            </div>
            <div className="col d-flex justify-content-center">
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
                  <p>Githublink: <a href="#">Pequanta/Abyssinian</a></p>
                </div>
              </div>
              </div>
              <div className="col">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nisi hic doloremque doloribus,
                  debitis quos! Officiis ipsam blanditiis dignissimos nihil, ullam animi alias. Reprehenderit velit 
                  recusandae vitae facere, quas ex nesciunt ducimus accusantium quasi. Odit esse quaerat possimus. 
                Veritatis ex numquam suscipit ullam natus saepe rem deserunt tempora temporibus accusantium.
              </div>
              <div className="col">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nisi hic doloremque doloribus,
                  debitis quos! Officiis ipsam blanditiis dignissimos nihil, ullam animi alias. Reprehenderit velit 
                  recusandae vitae facere, quas ex nesciunt ducimus accusantium quasi. Odit esse quaerat possimus. 
                Veritatis ex numquam suscipit ullam natus saepe rem deserunt tempora temporibus accusantium.
              </div>
            <hr/>
            </div>
            <div className="row">
              <div className="col d-flex">
              <img src={sece} className="w-25 rounded-circle mx-5"/>
              <div className="d-flex flex-column">
                <span className="fs-1">SECE</span>
                <p>Githublink: <a href="#">Pequanta/Abyssinian</a></p>
              </div>
              
              </div>
              <div className="col">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nisi hic doloremque doloribus,
                  debitis quos! Officiis ipsam blanditiis dignissimos nihil, ullam animi alias. Reprehenderit velit 
                  recusandae vitae facere, quas ex nesciunt ducimus accusantium quasi. Odit esse quaerat possimus. 
                Veritatis ex numquam suscipit ullam natus saepe rem deserunt tempora temporibus accusantium.
              </div>
              <div className="col">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nisi hic doloremque doloribus,
                  debitis quos! Officiis ipsam blanditiis dignissimos nihil, ullam animi alias. Reprehenderit velit 
                  recusandae vitae facere, quas ex nesciunt ducimus accusantium quasi. Odit esse quaerat possimus. 
                Veritatis ex numquam suscipit ullam natus saepe rem deserunt tempora temporibus accusantium.
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col">
              <img src={aby} className="w-25 rounded-circle mx-5"/>
              <span className="fs-1">Abyssinian</span>
              </div>
              <div className="col">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nisi hic doloremque doloribus,
                  debitis quos! Officiis ipsam blanditiis dignissimos nihil, ullam animi alias. Reprehenderit velit 
                  recusandae vitae facere, quas ex nesciunt ducimus accusantium quasi. Odit esse quaerat possimus. 
                Veritatis ex numquam suscipit ullam natus saepe rem deserunt tempora temporibus accusantium.
              </div>
              <div className="col">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nisi hic doloremque doloribus,
                  debitis quos! Officiis ipsam blanditiis dignissimos nihil, ullam animi alias. Reprehenderit velit 
                  recusandae vitae facere, quas ex nesciunt ducimus accusantium quasi. Odit esse quaerat possimus. 
                Veritatis ex numquam suscipit ullam natus saepe rem deserunt tempora temporibus accusantium.
              </div>
            </div>
            <hr/>
          </div>
        </div>
        </div>
        <div className="d-flex align-items-center w-75 p-4" id="#education">
          <div className="d-flex align-content-center justify-content-center min-vh-100">
            <div className="container align-content-center">
              <img src={profilePic} className="w-75"/>
            </div>
            
            <div className="container align-content-center">
              <p className="w-100">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has Lorem Ipsum. Lorem Ipsum is simply dummy
                text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center w-75 p-4" id="#contacts">
        <div className="d-flex align-content-center justify-content-center min-vh-100">
          <div className="container align-content-center">
            <img src={profilePic} className="w-75"/>
          </div>
          
          <div className="container align-content-center">
            <p className="w-100">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type
              specimen book. It has Lorem Ipsum. Lorem Ipsum is simply dummy
              text of the printing and typesetting industry. Lorem Ipsum has
              been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it
              to make a type specimen book.
            </p>
          </div>
        </div>
    </div>
      </main>
    </div>
  );
}

export default MainPage;

import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "./styles.css";
import "./Doc.css";
import rea from "../assets/react.png";
import expr from "../assets/express.png";
import node from "../assets/node.png";
import mongo from "../assets/mongo.png";
function Doc() {
  return (
    <div>
      <Navbar />
      <div className="content documentation">
        <main>
          <div class="mern">
            <img src={rea} alt="react" />
            <div class="boundary"></div>
            <div class="txt">
              <h1>React</h1>
              <h3>Front-end Development</h3>
              <p>
                React is a front end library which is used to create a dynamic
                and interactive web components like the catagories, services,
                and etc... web pages.
              </p>
            </div>
          </div>
          <div class="mern">
            <img src={expr} alt="express" />
            <div class="boundary"></div>
            <div class="txt">
              <h1>Express</h1>
              <h3>Back-end Development</h3>
              <p>
                Express is a back-end development framework that helps us to
                create APIs, handles server side logic, and manage routes.
              </p>
            </div>
          </div>
          <div class="mern">
            <img src={node} alt="node" />
            <div class="boundary"></div>
            <div class="txt">
              <h1>Node js</h1>
              <h3>Back-end Development</h3>
              <p>
                Node js is the run time environment that lets us run javascript
                on the server side. we use it to build our backend and work with
                express.js.
              </p>
            </div>
          </div>
          <div class="mern">
            <img src={mongo} alt="react" />
            <div class="boundary"></div>
            <div class="txt">
              <h1>MongoDB</h1>
              <h3>No-SQL-DataBase</h3>
              <p>
                MongoDB is the database where the datas like product
                information, user data and more are stored.
              </p>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Doc;

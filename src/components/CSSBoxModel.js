import React from "react";
import Sidebar from "./Sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Main = () => {
    return (
    <div className="container-fluid">
      <div className="row">
        <div className="article col-9">
          <h1>Introduction to the CSS basic box model</h1>
          <div className="art" d-flex flex-row  >
          <img src="https://static.javatpoint.com/csspages/images/css-box-model.png" height="250px" width="250px"  alt="Css box property image" />
            <p className="para-1">
              The components that can be depicted on the web page consist of one or more than one rectangular box.
              A CSS box model is a compartment that includes numerous assets, such as edge, border, padding and material. It is used to develop 
              the design and structure of a web page. It can be used as a set of tools to personalize the layout of different components. According
              to the CSS box model, the web browser supplies each element as a square prism.The following diagram illustrates how the CSS properties
              of width, height, padding, border and margin dictate that how much space an attribute will occupy on a web page.
            </p>
          </div>
          <div className="para-2">
          <br/>
          <p>
          The CSS box model contains the different properties in CSS. These are listed below.<br/>
          <ol class="d-flex flex-row justify-content-center">
            <li>1.Border</li>
            <li>2.Margin</li>
            <li>3.Padding</li>
            <li>4.Content</li>
          </ol>
          Now, we are going to determine the properties one by one in detail.
          <h5>Border Field</h5>
          It is a region between the padding-box and the margin. Its proportions are determined by the width and height of the boundary.
          <h5>Margin Field</h5>
          This segment consists of the area between the boundary and the edge of the border.
          The proportion of the margin region is equal to the margin-box width and height. It is better to separate the product from its neighbor nodes.
          <h5>Padding Field</h5>
          This field requires the padding of the component. In essence, this area is the space around the subject area and inside the border-box. The height and the width of the padding box decide its proportions.
          <h5>Content Field</h5>
          Material such as text, photographs, or other digital media is included in this area.
          It is constrained by the information edge, and its proportions are dictated by the width and height of the content enclosure.
          </p>
          </div>
        </div>
        <div className="col-3">
          <Sidebar/>
        </div>
      </div>
      
    </div>
    )
};

export default Main;

import { useState, useEffect } from "react";
import "./App.css";
import UseEffectAPI from "./component/useEffectAPI";

function App() {
  const [dataitem, setdataitem] = useState([]);
  const [counter, setCounter] = useState(0);
  const getapidata = async () => {
    let baseUrl = "";
    let body = {};
    let data = await fetch(
      "https://wyld-backend.herokuapp.com/api/show-suppliers"
    );
    console.log(data);
    console.log(data.status);
    let abc = await data.json();
    // console.log(abc.success);

    abc.data.data.forEach((e) => {
      console.log(e.contact_name);
      setdataitem(dataitem.concat(e.products));
      e.products.forEach((product) => {
        console.log(
          product.id +
            ":" +
            product.name +
            "(" +
            product.details +
            ") and it is " +
            product.status
        );
      });
    });
  };
  // useEffect(() => {
  //   console.log("working");
  //   const showdata = () => {
  //     dataitem.map((a) => {
  //       <>
  //         <p>abc</p>
  //       </>;
  //     });
  //   };
  // }, []);

  return (
    <>
      <h2>List of Github Users</h2>
      <button onClick={getapidata}>GET API DATA</button>
      <p>{dataitem.length}</p>
      <div>
        {dataitem.map((product) => {
          return (
            <p>
              product.id + ":" + product.name + "(" + product.details + ") and
              it is " + product.status
            </p>
          );
        })}
      </div>

      <div>
        {/* {dataitem.length} */}
        {/* for (var i=0; i<dataitem.length ; i++) {
        <div>
          <p>
           { product.id + ":" + product.name + "(" + product.details + ") and it is " + product.status}
          </p>
        </div>
      } */}
      </div>
      {/* <div className="container-fluid mt-5">
        <div className="row text-center">
          <div className="col-10 col-md-4 mt-5">
            <div className="card-p-2">
              <div className="d-flex align-items-center">
                <div className="image">
                  <img src="#" alt="" className="rounded" width="155" />
                </div>
                <div className="ml-3 w-100">
                  <h4 className="mb-0 mt-0 textLeft"></h4>
                  <span className="textLeft"></span>
                  <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                    <div className="d-flex flex-column">
                      <span className="articles">Articles</span>
                      <span className="number1"></span>
                    </div>
                    <div className="d-flex flex-column">
                      <span className="followers">Followers</span>
                      <span className="number2"></span>
                    </div>
                    <div className="d-flex flex-column">
                      <span className="a">Rating</span>
                      <span className="number3"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default App;

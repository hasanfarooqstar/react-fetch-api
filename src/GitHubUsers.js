import { useState, useEffect } from "react";
import "./App.css";
import UseEffectAPI from "./component/useEffectAPI";

function App() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://api.github.com/users");
    setUsers(await response.json());
    console.log(users);
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h2>List of Github Users</h2>

      <div className="container-fluid mt-5">
        <div className="row text-center">
          {users.map((currentObj) => {
            return (
              <div className="col-10 col-md-4">
                <div className="card-p-2 m-2">
                  <div className="d-flex align-items-center bg-light rounded-4">
                    <div className="image">
                      <img src={currentObj.avatar_url} alt="" className="rounded" width="155" />
                    </div>
                    <div className="ml-3 w-100">
                      <h4 className="mb-0 mt-0 textLeft">{currentObj.login}</h4>
                      <span className="textLeft">Web Developer</span>
                      <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                        <div className="d-flex flex-column">
                          <span className="articles">Articles</span>
                          <span className="number1">38</span>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="followers">Followers</span>
                          <span className="number2">980</span>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="a">Rating</span>
                          <span className="number3">8.9</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;

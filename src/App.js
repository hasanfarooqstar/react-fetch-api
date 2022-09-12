import "./App.css";
import UseEffectAPI from "./component/useEffectAPI";

function App() {
  return (
    <>
      <h2>List of Github Users</h2>
      <div className="container-fluid mt-5">
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
      </div>
    </>
  );
}

export default App;

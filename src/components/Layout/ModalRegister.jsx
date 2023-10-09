import Image from 'next/image';
import React from 'react';

function ModalRegister(props) {
  return (
    <>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-backdrop="static"
        data-keyboard="false"
        tabindex="-1"
        role="dialog"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog ">
          <div className="modal-content b1">
            <div className="modal-header">
              <h5 className="modal-title text-warning" id="staticBackdropLabel">
                Register
              </h5>
              <button
                type="button"
                className="close outlineNone"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <Image
                    src="https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-1/253988/12-512.png"
                    width="25"
                    height="25"
                    loading="lazy"
                    alt=''
                  />
                </span>
              </button>
            </div>
            <div className="modal-body b25 text-light">
              <form>
                <div className="form-group ">
                  <label for="exampleInputEmail3">Email address</label>
                  <input
                    type="email"
                    className="form-control "
                    id="exampleInputEmail3"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputName1">Name</label>
                  <input
                    type="text"
                    className="form-control  "
                    id="exampleInputName1"
                    aria-describedby="nameHelp"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword3">Password</label>
                  <input
                    type="password"
                    className="form-control "
                    id="exampleInputPassword3"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-outline-warning btn-block"
                >
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalRegister;

import React from "react";
import axios from "axios";

function WalkingDetail() {
  return (
    <React.Fragment>
      <div class="position-relative mt-5">
        <div class="d-flex justify-content-center w-100 fs-2 my-5 px-3 bg-warning">
          <div class=""> 往左 </div>
          <div class="flex-grow-1 text-center">預約細節</div>
        </div>
      </div>

      <div class="container border-3 border-bottom border-danger pb-5">
        <div class="row">
          <div class="col-12">
            <div class="py-3">
              <button
                class="btn btn-warning rounded-5 mx-2"
                style={{width: "120px"}}
              >
                狗
              </button>
              <button
                class="btn btn-warning rounded-5 mx-2"
                style={{width: "120px"}}
              >
                貓
              </button>
            </div>
            <div class="py-3 d-flex">
              <p class="my-auto px-3">1.日期與時間</p>
              <select class="mx-2 rounded-4" name="date" id="">
                <option>10/14</option>
                <option>10/15</option>
                <option>10/16</option>
              </select>
            </div>
          </div>
          <div class="col-12">
            <div class="py-3 d-flex">
              <div class="my-auto px-3">2.服務時間(30分鐘一節)</div>
              <select class="mx-2 rounded-4" name="gender" id="">
                <option>30分鐘</option>
                <option>60分鐘</option>
              </select>
            </div>
          </div>
        </div>

        <div class="p-3">
          <div class="d-inline me-3">3.頻率</div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
            ></input>
            <label class="form-check-label" for="inlineRadio1">
              一天一次
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
            ></input>
            <label class="form-check-label" for="inlineRadio2">
              一天兩次
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio3"
              value="option3"
            ></input>
            <label class="form-check-label" for="inlineRadio3">
              一天三次
            </label>
          </div>
        </div>

        <div class="py-3 d-flex">
          <p class="my-auto px-3">4.所需天數</p>
          <select class="mx-2 rounded-4" name="date" id="" required>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
          </select>
        </div>

        <div class="py-3 d-flex">
          <label class="my-auto px-3" for="customerAddress">
            5.地點
          </label>
          <input type="text" name="" id="customerAddress" required></input>
        </div>

        <div class="mb-3 p-3 w-50">
          <label for="exampleFormControlTextarea1" class="form-label">
            6.其他要求(選填)
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="4"
          ></textarea>
        </div>
      </div>

      <div class="container border-3 border-bottom border-danger pb-5">
        <div class="d-flex justify-content-between p-5 fs-3 fw-bold">
          <div>小計</div>
          <div>NTD250</div>
        </div>
        <div class="row px-5 py-3 fs-5">
          <div class="col-6">天數</div>
          <div class="col-6 text-end">X0</div>
        </div>
        <div class="row px-5 py-3 fs-5">
          <div class="col-6">服務時間(30分鐘一節)</div>
          <div class="col-6 text-end">X0</div>
        </div>
        <div class="row px-5 py-3 fs-5">
          <div class="col-6">每天次數</div>
          <div class="col-6 text-end">X0</div>
        </div>
      </div>

      <div class="container">
        <div class="row px-5 py-3 fs-5 align-items-center py-5">
          <div class="col-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
            >
              <path
                d="M0 4.6875C0 4.2731 0.16462 3.87567 0.457646 3.58265C0.750671 3.28962 1.1481 3.125 1.5625 3.125H6.25C6.59854 3.1251 6.93703 3.24172 7.21166 3.45633C7.48629 3.67093 7.68128 3.9712 7.76562 4.30937L9.03125 9.375H45.3125C45.5419 9.37521 45.7685 9.42595 45.9761 9.5236C46.1837 9.62125 46.3673 9.76342 46.5137 9.94001C46.6602 10.1166 46.766 10.3233 46.8235 10.5454C46.8811 10.7675 46.8891 10.9995 46.8469 11.225L42.1594 36.225C42.0924 36.5831 41.9023 36.9064 41.6222 37.1392C41.342 37.3721 40.9893 37.4997 40.625 37.5H12.5C12.1357 37.4997 11.783 37.3721 11.5028 37.1392C11.2227 36.9064 11.0327 36.5831 10.9656 36.225L6.28125 11.2719L5.03125 6.25H1.5625C1.1481 6.25 0.750671 6.08538 0.457646 5.79235C0.16462 5.49933 0 5.1019 0 4.6875ZM9.69375 12.5L13.7969 34.375H39.3281L43.4312 12.5H9.69375ZM15.625 37.5C13.9674 37.5 12.3777 38.1585 11.2056 39.3306C10.0335 40.5027 9.375 42.0924 9.375 43.75C9.375 45.4076 10.0335 46.9973 11.2056 48.1694C12.3777 49.3415 13.9674 50 15.625 50C17.2826 50 18.8723 49.3415 20.0444 48.1694C21.2165 46.9973 21.875 45.4076 21.875 43.75C21.875 42.0924 21.2165 40.5027 20.0444 39.3306C18.8723 38.1585 17.2826 37.5 15.625 37.5ZM37.5 37.5C35.8424 37.5 34.2527 38.1585 33.0806 39.3306C31.9085 40.5027 31.25 42.0924 31.25 43.75C31.25 45.4076 31.9085 46.9973 33.0806 48.1694C34.2527 49.3415 35.8424 50 37.5 50C39.1576 50 40.7473 49.3415 41.9194 48.1694C43.0915 46.9973 43.75 45.4076 43.75 43.75C43.75 42.0924 43.0915 40.5027 41.9194 39.3306C40.7473 38.1585 39.1576 37.5 37.5 37.5ZM15.625 40.625C16.4538 40.625 17.2487 40.9542 17.8347 41.5403C18.4208 42.1263 18.75 42.9212 18.75 43.75C18.75 44.5788 18.4208 45.3737 17.8347 45.9597C17.2487 46.5458 16.4538 46.875 15.625 46.875C14.7962 46.875 14.0013 46.5458 13.4153 45.9597C12.8292 45.3737 12.5 44.5788 12.5 43.75C12.5 42.9212 12.8292 42.1263 13.4153 41.5403C14.0013 40.9542 14.7962 40.625 15.625 40.625ZM37.5 40.625C38.3288 40.625 39.1237 40.9542 39.7097 41.5403C40.2958 42.1263 40.625 42.9212 40.625 43.75C40.625 44.5788 40.2958 45.3737 39.7097 45.9597C39.1237 46.5458 38.3288 46.875 37.5 46.875C36.6712 46.875 35.8763 46.5458 35.2903 45.9597C34.7042 45.3737 34.375 44.5788 34.375 43.75C34.375 42.9212 34.7042 42.1263 35.2903 41.5403C35.8763 40.9542 36.6712 40.625 37.5 40.625Z"
                fill="black"
              />
            </svg>
            <div class="d-inline align-middle p-2">總計：100元</div>
          </div>
          <div class="col-6 text-end">
            <button class="btn bg-warning rounded-5 p-3">預約請求</button>
          </div>
        </div>
        <div class="pb-5">
          備註：預約請求是免費的，在確認付款前您可以與對方討論服務細節，可以隨時取消預約請求
        </div>
      </div>
    </React.Fragment>
  );
}
export default WalkingDetail;
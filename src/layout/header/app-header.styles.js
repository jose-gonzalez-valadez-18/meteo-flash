import { css } from "lit";

export default css`
  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px 0;
    gap: 20px;
    border-bottom: 2px solid #26391d;

    .container-logo {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      height: 70px;
      gap: 10px;
      text-decoration: none;
      color: white;

      img {
        height: 50%;
      }
      h1 {
        width: auto;
        font-size: 18px;
        font-family: Arial, Helvetica, sans-serif;
      }
    }

    nav {
      display: flex;
      justify-content: space-between;

      ul {
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: 20px;
        li{
          list-style: none;

          .button-header{
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 30px;
            color: white;
            background-color: #304724;
            border-radius: 10px;
            height: 40px;
            aspect-ratio: 1/1;
          }
        }
      }
    }

    .container-search {
      position: relative;
      display: flex;
      align-items: center;
      .icon {
        position: absolute;
        left: 12px;
        display: flex;
        align-items: center;
        color: #a5c893;
        font-size: 22px;
      }
      input {
        padding-left: 40px;
        width: 248px;
        height: 38px;
        border-radius: 10px;
        background-color: #304724;
        box-shadow: none;
        border: none;
        color: #c4d4c4;
        font-size: 15px;
      }
      input::placeholder {
        color: #a5c893;
      }
    }

    button {
      height: 45px;
      width: 45px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      border-radius: 10px;
      border: none;
      font-size: 49px;
      color: blue;

      img {
        width: 100%;
      }
    }
  }
`;

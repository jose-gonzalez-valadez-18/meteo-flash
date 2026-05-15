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
        padding: 0;
        margin: 0;

        li {
          list-style: none;

          .button-header {
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
        box-sizing: border-box;
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

    @media (max-width: 900px) {
      gap: 12px;

      .container-logo {
        h1 {
          font-size: 16px;
        }
      }

      .container-search {
        input {
          width: 190px;
        }
      }

      nav {
        ul {
          gap: 12px;
        }
      }
    }

    @media (max-width: 700px) {
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 15px;
      padding: 10px 0 15px;

      .container-logo {
        width: 100%;
        height: 55px;
        justify-content: center;

        img {
          height: 45%;
        }

        h1 {
          font-size: 16px;
        }
      }

      /* ICONOS + BUSCADOR EN UNA SOLA LÍNEA */
      nav {
        order: 2;

        ul {
          gap: 10px;
        }
      }

      .container-search {
        order: 2;
        flex: 1;
        min-width: 150px;

        input {
          width: 100%;
        }
      }
    }

    @media (max-width: 420px) {
      width: 94%;
      gap: 10px;

      .container-logo {
        h1 {
          font-size: 14px;
        }
      }

      nav {
        ul {
          gap: 8px;

          li {
            .button-header {
              height: 36px;
              font-size: 24px;
            }
          }
        }
      }

      .container-search {
        min-width: 120px;

        input {
          height: 36px;
          font-size: 14px;
        }

        .icon {
          font-size: 18px;
        }
      }

      button {
        height: 38px;
        width: 38px;
        font-size: 38px;
      }
    }
  }
`;
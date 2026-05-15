import { css } from "lit";

export default css`
  main {
    margin: auto;
    margin-top: 130px;
    width: 100%;
    h2 {
      display: flex;
      justify-content: flex-start;
      gap: 10px;
      font-size: 20px;
      width: 50%;
      border-bottom: 2px double #26391d;
      padding: 0;
      padding-bottom: 10px;
      margin-top: 30px;
      margin-bottom: 30px;
    }
    .main-info {
      margin: auto;
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: center;
      gap: 30px;

      .info-location {
        width: fit-content;
        display: flex;
        flex-direction: column;
        gap: 0px;
        border-radius: 10px;

        .location {
          display: flex;
          flex-direction: row;
          gap: 5px;
          align-items: last baseline;
          margin: 0;

          .district {
            font-size: 25px;
            font-weight: 700;
            line-height: 1;
          }

          .city {
            font-size: 18px;
            line-height: 1;
          }
        }

        .date {
          margin-top: 0;
          font-size: 16px;
          line-height: 1;
          color: #a5c893;
        }
      }

      .info-forecast {
        width: 60%;
        height: 400px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 10px;

        .overlay {
          display: flex;
          align-items: last baseline;
          box-sizing: border-box;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          border-radius: 10px;
          padding: 20px;
          gap: 30px;

          .temperature {
            font-size: 60px;
            font-weight: 700;
            margin: 0;
          }

          .weather-details {
            display: flex;
            flex-direction: column;
            gap: 5px;

            .weather-description {
              margin: 0;
              font-size: 20px;
              font-weight: 500;
            }

            .apparent-temperature {
              margin: 0;
              font-size: 20px;
              font-weight: 500;
              color: #87a07a;
            }
          }
        }
      }

      @media (max-width: 900px) {
        flex-direction: column;
        align-items: center;
        gap: 20px;

        .info-location {
          width: 90%;
        }

        .info-forecast {
          width: 90%;
          height: 350px;
        }
      }

      @media (max-width: 600px) {

        .info-location {
          width: 100%;

          .location {
            width: 100%;
            gap: 4px;

            .district {
              font-size: 20px;
            }

            .city {
              font-size: 14px;
            }
          }

          .date {
            font-size: 14px;
          }
        }

        .info-forecast {
          width: 100%;
          height: 280px;

          .overlay {
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-end;
            gap: 10px;
            padding: 16px;

            .temperature {
              font-size: 46px;
            }

            .weather-details {
              .weather-description,
              .apparent-temperature {
                font-size: 16px;
              }
            }
          }
        }
      }

      @media (max-width: 380px) {
        .info-forecast {
          height: 240px;

          .overlay {
            .temperature {
              font-size: 38px;
            }
          }
        }
      }
    }
    .week-cards {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      flex-wrap: wrap;
      gap: 30px;
    }
  }
`;

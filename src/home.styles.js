import { css } from "lit";

export default css`
  main {
    margin: auto;
    margin-top: 100px;
    width: 90%;

    .info-location {
      display: flex;
      flex-direction: row;
      align-items: last baseline;
      gap: 10px;
      .district {
        font-size: 25px;
        font-weight: 700;
        line-height: 0%;
      }
      .city {
        font-size: 18px;
        line-height: 0%;
      }
    }
  }
`;

import { css } from "lit";

export default css`
  .card-vertical {
    background-color: #304724;
    width: fit-content;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: #2a411e;
    }
    .card {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-decoration: none;
      padding: 20px 15px;
      gap: 15px;
      p{
        margin: 0;
      }
      .title {
        color: #a1a1a1;
        font-size: 18px;
        font-weight: 600;
      }
      span {
        color: orange;
        font-size: 40px;
      }
      .temperature {
        color: white;
        font-size: 20px;
        font-weight: 700;
      }
      .apparent-temperature {
        color: #87a07a;
        font-size: 18px;
        font-weight: 500;
      ;
      }
    }
  }
`;

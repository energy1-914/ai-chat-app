import Seo from "../components/Seo";
export default function Home() {
  return (
    <div className="container">
      <Seo title={"Login"} />
      <img src="https://i.namu.wiki/i/CQ5Gvq8YSbcklTvrdct3ER_FU1X3fdkb1U6lcMYH7HwtwNlgvRUGsZ4UJR7ycpbSmRKPgKQZTw9OohS_kWiETgsBrqT3Bo5LrQqPt9OkItl6dkvVA4br3e_CE-mLkUkrvSpT_hXtn9fLq_kyufEIoGkGJtdIhC1EuIezCUxaxgg.svg" />
      <div className="api_key">
        <h4>API KEY</h4>
        <input />
      </div>
      <button>Login</button>
      <style jsx>{`
        .container {
          background: black;
          color: white;

          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 30px;

          padding: 30px 0px;
          margin: 0px;
          min-height: 100vh;
          width: 90vw;
          min-width: 450px;
          max-width: 680px;
        }
        .api_key {
          width: 250px;
        }
        img {
          width: 110px;
          height: 110px;
        }
        input {
          background-color: black;
          color: white;
          width: 100%;
          margin-top: 10px;
          padding: 15px 100px;
          border: 2px solid #393939;
          border-radius: 5px;
          outline: none;
        }
      `}</style>
    </div>
  );
}

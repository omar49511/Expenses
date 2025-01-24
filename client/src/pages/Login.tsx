import InputField from "../components/InputField/InputField";

export default function Login() {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "var(--title-color)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#f9f9f9",
          borderRadius: "8px",
          maxWidth: "400px",
          margin: "auto",
          padding: "20px",
          filter: "drop-shadow(0px 10px 5.8px rgba(0, 0, 0, 0.25))",
        }}
      >
        <h1 style={{ marginBottom: "40px", fontSize: "40px" }}>
          Expense control
        </h1>

        <InputField
          label="Email"
          type="text"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
        <InputField
          label="Password"
          type="password"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
        <div
          style={{
            width: "100%",
            marginTop: "20px",
          }}
        >
          <a
            href="#"
            style={{
              fontSize: "14px",
              color: "#957D95",
              marginTop: "10px",
              marginBottom: "20px",
              textDecoration: "underline",
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            Reset password
          </a>
        </div>

        <button
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "20px",
            marginBottom: "10px",
            backgroundColor: "#957D95",
            color: "white",
            border: "none",
            borderRadius: "4px",
            fontSize: "16px",
            cursor: "pointer",
            boxSizing: "border-box",
            textAlign: "center",
          }}
        >
          Login
        </button>

        <button
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#2A2A2A",
            color: "white",
            border: "none",
            borderRadius: "4px",
            fontSize: "16px",
            cursor: "pointer",
            boxSizing: "border-box",
            textAlign: "center",
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
}

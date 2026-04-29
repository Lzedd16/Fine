const Login = () => {
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5000/auth/google";
  };

  return (
    <div>
      <div style={styles.container1}>
        <h1>Fine</h1>
      </div>
      <div style={styles.container}>
      <button style={styles.button} onClick={handleGoogleLogin}>
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google"
          style={styles.icon}
        />
        Sign in with Google
      </button>
    </div>
    </div>
    
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "12px 24px",
    fontSize: "16px",
    fontWeight: "500",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#fff",
    cursor: "pointer",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  icon: {
    width: "20px",
    height: "20px",
  },
};

export default Login;
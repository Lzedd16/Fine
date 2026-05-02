import '../assets/index.css'
import HeaderLogin from '../assets/Elements/HeaderLogin';


const GuestButton = ({onClick}) => (
  <button 
  onClick={onClick}
  className='
    flex items-center
    justify-center
    gap-3
    w-72
    h-12
    bg-primary
    text-white
    font-medium
    rounded-lg
    shadow-sm hover:shadow-md
    transition-all duration-200
  '>
    Continue as Guest
  </button>
);
const GoogleButton = ({onClick}) => (
  <button
    onClick={onClick}
    className="
    flex items-center 
    justify-center
    gap-3
    w-72
    h-12
    bg-white
    text-gray-700
    font-medium
    border border-gray-300
    rounded-lg
    shadow-sm hover:shadow-md
    transition-all duration-200
    "
  >
    <img src="https://www.svgrepo.com/show/475656/google-color.svg" 
    alt="Google"
    className="w-5 h-5" 
    />
    Sign in with Google
  </button>
);


const Card = ({ children }) => (
  <div
    className="
      flex flex-col items-center justify-center gap-6
      w-96 p-10
      bg-white rounded-2xl shadow-lg
    "  
  > 
    {children}
  </div>
);



const Login = () => {
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5000/auth/google";
  };

  return (
  <>
  <HeaderLogin/>
  <div class="grid col-start-2 w-full ">
      <Card>
        <p className="text-[48px] font-semibold text-center">Welcome to Fine</p>
        <p className="text-gray-400">Continue with your Google Account</p>
        <div className="flex items-center gap-4 w-full">
          <hr className="flex-1 border border-gray-200" />
          <span className="text-sm text-gray-400">Continue</span>
          <hr className="flex-1 border border-gray-200" />
      </div>
        <GoogleButton onClick={handleGoogleLogin}></GoogleButton>
        <GuestButton></GuestButton>
      </Card>
    </div>
  </>
    
    
  );
}; 



export default Login;
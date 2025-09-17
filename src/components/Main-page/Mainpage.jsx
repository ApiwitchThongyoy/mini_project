import { useNavigate } from 'react-router-dom';
function Mainpage () {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-5xl mb-10 font-bold">HANG MAN</h1>
        <button
          onClick={() => navigate("/Hangman")}
          className="px-20 py-5 bg-lime-500 text-white text-lg rounded-lg hover:bg-lime-600 transition duration-200 cursor-pointer font-bold"
        >
          PLAY
        </button>
      </div>
    </div>
  )
}

export default Mainpage;

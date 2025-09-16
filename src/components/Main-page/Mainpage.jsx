function Mainpage () {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-5xl mb-10 font-bold">HANG MAN</h1>
        <button
          onClick={() => console.log("Play")}
          className="px-20 py-5 bg-lime-500 text-white text-lg rounded-lg hover:bg-lime-600 transition duration-200 cursor-pointer font-bold"
        >
          PLAY
        </button>
      </div>
    </div>
  )
}

export default Mainpage;

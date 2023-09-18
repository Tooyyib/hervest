









function Home() {
  return (
    <div className="bg-gradient-to-r from-green-500 via-blue-500 to-yellow-50">
     {/* section 1 */}

     <div className="flex justify-evenly items-center font-bold p-2 text-[#ffff] bg-gradient-to-r from-yellow-500 via-purple-500 to-pink-500">
        <div className="w-[40%]">PLATAFOMA</div>
        <div className="flex gap-3 w-[40%] items-center">
          <div>Home</div>
          <div>About</div>
          <div>Speaker</div>
          <div>Schedule</div>
          <div>Blog</div>
          <div>Contact</div>
          <div>
            <button className="p-1 hover:-translate-y-1 duration-700 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded text-white">Buy Ticket</button>
          </div>
        </div>
      </div>

      {/* section 2 */}
      <div className="flex justify-evenly my-[8rem]">
        <div className="w-[40%]">
          <div>
            <div>Business Leaders</div>
            <div>
              <h1 className="text-[2rem] text-[#ffff] font-bold bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                CONFERENCE 2023
              </h1>
            </div>
            <div>20-23 November 2019-Los Angelese CA</div>
            <div className="flex gap-5">
              <div className="border border-solid">
                <p>149</p>
                <p>DAYS</p>
              </div>
              <div className="border border-solid">
                <p>01</p>
                <p>HOURS</p>
              </div>
              <div className="border border-solid">
                <p>10</p>
                <p>MINUTES</p>
              </div>
              <div className="border border-solid">
                <p>59</p>
                <p>SECONDS</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[20%] bg-[#fafa] p-[1rem]">
          <div className="font-bold my-[0.5rem]">
            <h2>join Conference</h2>
          </div>
          <div className="border border-outline">
            <input type="text" placeholder="enter your Name" />
          </div>
          <div className="border border-outline my-[1rem]">
            <input type="text" placeholder="enter your Email" />
          </div>
          <div className="border border-outline">
            <input type="text" placeholder="enter your Phone" />
          </div>
          <div className="border border-outline">
            <input type="checkbox" />
            <label htmlFor="">i have accept the terms and conditions</label>
          </div>
          <div>
            <button className="p-1 rounded bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500  hover:-translate-y-1 duration-700 border-dotted border-2 border-indigo-600 hover:to-yellow-500 font-bold text-white w-[97%]">
              join now
            </button>
          </div>
        </div>
      </div>

      {/* section 3 */}

      <div className="flex justify-evenly bg-gradient-to-r from-green-500 via-blue-500 to-yellow-500">
        <div className="">
          <p>icon</p>
          <p>content</p>
        </div>
        <div>
          <p>icon</p>
          <p>content</p>
        </div>
        <div>
          <p>icon</p>
          <p>content</p>
        </div>
        <div>
          <p>icon</p>
          <p>content</p>
        </div>
      </div>
    </div>
  );
}
export default Home;

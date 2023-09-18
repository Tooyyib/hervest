"use client";
import { Carousel } from "flowbite-react";
import hervest from "../assets/hervest.svg";
import hervest2 from "../assets/hervest2.png";
import woman from "../assets/woman.jpg";
import phone1 from "../assets/phone1.png";
import dollar from "../assets/dollar.png";
import piggy1 from "../assets/piggy1.png";
import africa1 from "../assets/africa1.svg";
import google1 from "../assets/google1.png";
import vcaa1 from "../assets/vcaa1.png";
import flutter from "../assets/flutter.png";
import katapu1 from "../assets/katapu1.png";
import usaid1 from "../assets/usaid1.png";
import cards4 from "../assets/cards4.svg";
import cards2 from "../assets/cards2.png";
import cards1 from "../assets/cards1.png";
import cards3 from "../assets/cards3.png";

import techcabal1 from "../assets/techcabal1.png";
import theguardian1 from "../assets/theguardian1.png";
import agfunder1 from "../assets/agfunder1.svg";
import appstore1 from "../assets/appstore1.svg";
import googleplay1 from "../assets/googleplay1.svg";
import instagram1 from "../assets/instagram1.svg";
import pink1 from "../assets/pink1.svg";
import pink2 from "../assets/pink2.svg";
import pink3 from "../assets/pink3.svg";
import pink4 from "../assets/pink4.svg";
import pink5 from "../assets/pink5.svg";
import referral1 from "../assets/referral1.png";
import referral2 from "../assets/referral2.png";
import lightinstagram1 from "../assets/lightinstagram1.svg";
import linkedin1 from "../assets/linkedin1.svg";
import twitter1 from "../assets/twitter1.svg";

function Home() {
  return (
    <div className="body bg-[#ffffff]">
      <nav className="flex justify-start px-[6rem] py-[2.5rem] items-center gap-9">
        <div>
          <a href="https://hervest.ng">
            <img src={hervest} className=" w-[6rem]" alt="hervest"></img>
          </a>
        </div>
        <div>
          <a href="https://hervest.ng/#invest">Save & Invest</a>
        </div>
        <div>
          <a href="https://learn.hervest.ng">Learn</a>
        </div>
        <div>
          <a href="https://hervest.ng/faqs">FAQs</a>
        </div>
        <div>
          <a href="https://app.hervest.ng">Log In</a>
        </div>
        <div>
          <button className="bg-[#540b45] hover:bg-[#b50382] text-[#fff] p-[0.5rem] w-[5.7rem] rounded">
            <a href="https://app.hervest.ng/Signup">Sign Up</a>
          </button>
        </div>
      </nav>
      {/* section 2 */}

      <div className="flex justify-start gap-9 px-[8rem]">
        <div className="child1 w-[50%]">
          <div className="text-[1.8rem] text-[#b50182]">Helping You</div>
          <div className="text-[5rem] text-[#b50182]">
            <h1>MANAGE</h1>
          </div>
          <div className="text-[1.8rem] text-[#b50182]">Your Money</div>
          <div className="text-[1.5rem]">
            <p>
              Pioneering inclusive finance for the <br />
              African woman
            </p>
          </div>
          <div className="my-[1.7rem]">
            {" "}
            <button className="bg-[#540b45] hover:bg-[#b50382] text-[#fff] p-2  w-[15rem] rounded">
              <a href="hervestng.app.link">Create A Free Account </a>
            </button>{" "}
          </div>
        </div>
        <div className="child2 w-[50%]">
          <img src={woman} className="w-[40rem]" alt="woman"></img>
        </div>
      </div>

      {/* relative div of section 2 */}
      <div className="flex justify-between">
        <div className=""></div>
        <div>
          <div className="w-[] h-[] bg-[#fafa] rounded">1</div>
          <div className="w-[] bg-[] rounded">2</div>
          <div className="w-[] bg-[] rounded">3</div>
          <div className="w-[] bg-[] rounded">4</div>
        </div>
      </div>

      {/* section 3 */}

      <div>
        <div className="w-[30%] mx-auto">
          <h2 className="text-[#b50182] text-[1.7rem]">
            Backed By Global Companies
          </h2>
        </div>
        <div className="flex justify-center gap-12 items-center my-[2rem]">
          <div>
            <a href="https://hervest.ng">
              <img src={google1} className=" w-[8rem]" alt="google1"></img>
            </a>
          </div>
          <div>
            <a href="https://hervest.ng">
              <img src={vcaa1} className=" w-[8rem]" alt="vcaa1"></img>
            </a>
          </div>
          <div>
            <a href="https://hervest.ng">
              <img src={flutter} className=" w-[8rem]" alt="flutter"></img>
            </a>
          </div>
          <div>
            <a href="https://hervest.ng">
              <img src={katapu1} className=" w-[8rem]" alt="katapu1"></img>
            </a>
          </div>
          <div>
            <a href="https://hervest.ng">
              <img src={usaid1} className=" w-[8rem]" alt="usaid1"></img>
            </a>
          </div>
        </div>
      </div>

      {/* section 4 */}
    
        <div className="flex  gap-2 my-[6rem]">
          <div className="flex justify-between items-center rounded bg-[#e6f6f1]">
            <div className="text-[1.8rem] w-[13rem]">
              Free In-App Transfers, Zero Withdrawal Charges. No Hidden Charges
            </div>
            <div>
              <img className="w-[7rem] h-[10rem]" src={phone1} alt="phone1" />
            </div>
          </div>
          <div className="flex justify-between items-center rounded bg-[#e6f6f1]">
            <div className="text-[1.8rem] w-[13rem]">
              Saving Is Good. Investing Is Growth, And My Dear, You Need Both
            </div>
            <div>
              <img className="w-[5rem] h-[5rem]" src={piggy1} alt="piggy1" />
            </div>
          </div>
          <div className="flex justify-between items-center rounded bg-[#e6f6f1]">
            <div className="text-[1.8rem] w-[13rem]">
              Invest In Dollar-Denominated Assets And Earn Interest In Dollars
            </div>
            <div>
              <img className="w-[5rem] h-[5rem]" src={dollar} alt="dollar" />
            </div>
          </div>
          <div className="flex justify-between items-center rounded bg-[#e6f6f1]">
            <div className="text-[1.8rem] w-[13rem]">
              Refer And Earn. Enjoy Cash Bonuses When You Refer Your Friends
            </div>
            <div>
              <img
                className="w-[5rem] h-[5rem]"
                src={africa1}
                alt="africa1"
              />
            </div>
          </div>
        </div>
    

      {/* section 5 */}
      <Carousel>
        <img alt="..." className="" src={cards1} />
        <img alt="..." className="" src={cards2} />
        <img alt="..." className="" src={cards3} />
        <img alt="..." className="" src={cards4} />
      </Carousel>

      {/* section 6 */}
      <div className="flex justify-evenly my-[2rem] mb-[5rem]">
        <div className=" text-[1.9rem]">
          What Our Women Say About Us
        </div>
        <div className="">
          <Carousel>
            <img alt="..." className="" src={cards1} />
            <img alt="..." className="" src={cards2} />
            <img alt="..." className="" src={cards3} />
            <img alt="..." className="" src={cards4} />
          </Carousel>
        </div>
      </div>

      {/* section 7 */}
      <div className="flex justify-evenly my-[2rem]">
        <div className="flex items-center">
          <div>
            <img className="w-[12rem] h-[19rem]" src={referral1} />
          </div>
          <div>
            <img className="w-[10rem] h-[14rem]" src={referral2} />
          </div>
        </div>
        <div className="bg-[#f5e5f0] rounded flex flex-col gap-12 p-9">
          <div>
            <div>START YOUR INVESTMENT JOURNEY</div>
          </div>
          <div>
            <div className="bg-[#f0deea]">STEP 1 - CREATE A FREE ACCOUNT</div>
            <div>Sign up with your name, email and phone number.</div>
          </div>
          <div>
            <div className="bg-[#f0deea]">STEP 2 - SET UP YOUR PURSE ACCOUNT</div>
            <div>Register your BVN to generate a unique account number.</div>
          </div>
          <div>
            <div className="bg-[#f0deea]">STEP 3 - START A SAVINGS AND INVESTMENT PLAN</div>
            <div>
              Add a debit card or fund your purse to activate your plan.
            </div>
          </div>
          <div>
            <div className="bg-[#f0deea]">STEP 4 - RELAX AND WATCH YOUR MONEY GROW</div>
            <div>Reach your goals while earning juicy interest on the go.</div>
            <div className="flex justify-center my-[1rem]">
              <button className="bg-[#540b45] rounded p-2 w-[8rem] text-[#ffffff]">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* section 8 */}
      <div className="flex justify-around my-[2rem] bg-[#fdf8fc] p-5 items-center">
        <div className="flex gap-3 text-[1.5rem]">
          <div>FOLLOW US ON</div>
          <div>
            <img className="w-[3rem] h-[3rem]" src={instagram1} />
          </div>
          <div>
            <img className="w-[3rem] h-[3rem]" src={twitter1} />
          </div>
          <div>
            <img className="w-[3rem] h-[3rem]" src={linkedin1} />
          </div>
        </div>
        <div className="flex gap-2 bg-[#540b45] rounded items-center">
          <div>
            <img className="w-[3rem] h-[3rem]" src={lightinstagram1} />
          </div>
          <div className="text-[#ffffff]">VISIT OUR INSTAGRAM PAGE</div>
        </div>
      </div>

      {/* section 9 */}
      <div className="flex justify-evenly my-[2rem] p-5">
        <img className="w-[10rem] h-[4rem]" src={techcabal1} />
        <img className="w-[10rem] h-[4rem]" src={agfunder1} />
        <img className="w-[10rem] h-[4rem]" src={theguardian1} />
        <img className="w-[10rem] h-[4rem]" src={techcabal1} />
        <img className="w-[10rem] h-[4rem]" src={hervest} />
      </div>

      {/* section 10 footer */}
      <div className="flex flex-col justify-center my-[2rem] gap-3 text-[#ffff] bg-[#540445]">
        <div className="flex justify-evenly mb-[4rem] my-[3rem]">
          <div>
            <a href="https://hervest.ng">
              <img src={hervest2} className=" w-[9rem] rounded" alt="hervest2"></img>
            </a>
          </div>
          <div>
            <div>about us</div>
            <div>mission & vision</div>
            <div>people</div>
            <div>campus</div>
            <div>abassadors</div>
          </div>
          <div>
            <div>health center</div>
            <div>FAQS</div>
            <div>community</div>
            <div>contact us</div>
            <div>careers</div>
          </div>
          <div>
            <div>Tools</div>
            <div>Interest Calculator</div>
          </div>
          <div>
            <div className="flex gap-1 items-center">
              <div>
                {" "}
                <img className="w-[2rem] h-[2rem]" src={pink1} />
              </div>
              <div>
                {" "}
                <img className="w-[2rem] h-[2rem]" src={pink2} />
              </div>
              <div>
                {" "}
                <img className="w-[2rem] h-[2rem]" src={pink3} />
              </div>
              <div>
                {" "}
                <img className="w-[2rem] h-[2rem]" src={pink4} />
              </div>
              <div>
                {" "}
                <img className="w-[2rem] h-[2rem]" src={pink5} />
              </div>
            </div>
            <div>
              <div>
                {" "}
                <img className="w-[8rem] h-[4rem]" src={googleplay1} />
              </div>
              <div>
                {" "}
                <img className="w-[8rem] h-[4rem]" src={appstore1} />
              </div>
            </div>
          </div>
        </div>
        <div className="text-[0.9rem] p-[6rem]">
          <div className="mb-[2rem]">
            This site uses cookies.{" "}
            <span className="text-[#e64884]">Cookie Policy.</span> I agree to
            the <span className="text-[#e64884]">terms of use , </span> and the
            <span className="text-[#e64884]"> Disclaimer Policy. </span>This
            Information will not be used for marketing purposes.
          </div>
          <div className="mb-[1rem]"><hr /></div>
          <div>
            Copyright 2023 HerVest for Women Limited. All rights reserved
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;

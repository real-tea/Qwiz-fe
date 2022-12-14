import { useNavigate } from "react-router-dom";
import LandingIllustration from "../assets/peeps/hero/peep-hero.svg";
import Logo from "../assets/q_logo.png";
import { Footer } from "../components/Footer";


export const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="">
      <div className="landing">
        <div
          style={{ height: "81vh" }}
          className="flex flex-col md:flex-row items-center justify-between max-w-screen-xl mx-5 md:mx-auto"
        >
          <div className="w-12/12 md:w-6/12 flex items-center justify-center">
            <div className="h-72 md:h-96 w-72 md:w-96">
              <img
                src={LandingIllustration}
                className="h-full w-full object-cover"
                alt="landing"
              />
            </div>
          </div>
          <div className="w-12/12 md:w-6/12">
            <div className="flex items-center">
              {/* <img
                src={Logo}
                className="h-20 w-20 object-cover"
                alt="landing"
              /> */}
              <h1 className="py-6 text-4xl font-thick text-orange-600">Qwiz</h1>
            </div>
            <h2 className="text-2xl font-medium mt-2 text-slate-600">
              Quiz Builder and Assessment Tool
            </h2>
            <p className="w-10/12 mt-4 text-slate-600 font-medium text-xl">
              Using Quizco, it’s super fast and easy to create a quiz - perfect
              for revision guides, driving theory practice and trivia.
            </p>
            <div>
              <button
                onClick={() => navigate("/sign-up")}
                className="px-6 py-4 bg-[#ffd8a8] text-white rounded-md mt-4"
              >
                Start Building
              </button>
            </div>
          </div>
        </div>
      </div>
     
      {/* <div className="my-20 max-w-screen-xl mx-5 md:mx-auto">
        <h2 className="text-center text-2xl md:text-4xl font-medium text-slate-600">
          Everything You Need to Build and Manage Your Quiz
        </h2>
        <div style={{ gap: 20 }} className="grid mt-10 grid-use-app">
          {AppUseData.map((useData) => (
            <div
              className="flex flex-col px-4 py-7 items-center justify-center shadow-large rounded-md"
              key={useData.id}
            >
              <div className="w-16 h-16">
                <img
                  src={useData.imgsrc}
                  className="w-full h-full object-cover"
                  alt="Create a Quiz Illustration"
                />
              </div>
              <p className="ml-4 mt-3 text-md w-50 text-center">
                {useData.label}
              </p>
            </div>
          ))}
        </div>
      </div> */}

      {/* <div className="my-20 max-w-screen-xl mx-5 md:mx-auto flex flex-wrap md:flex-nowrap items-center justify-between">
        <div className="w-40 h-40 w-2/12">
          <img
            src={EcoFriendly}
            className="w-full h-full object-contain"
            alt=""
          />
        </div>
        <p className="w-full md:w-10/12 ml-0 md:ml-4 text-2xl">
          Save resources and money by avoiding print-out quiz sheets and test
          papers. Users can complete your paperless quiz via Quizco.
        </p>
      </div> */}

      <Footer />
    </div>
  );
};

/*
Make your own quiz and test yourself
*/



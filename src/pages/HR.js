import { useEffect, useState } from "react";
import "./HR.css";
import axios from "axios";
import { cookieSplitter } from "./student_portal/utils";
import MarkDown  from 'react-markdown'

function C1({ item }) {
  console.log("insdie c1 ", item);
  return (
    <div className="right prose">
      {item}
    </div>
  );
}
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [active, setactive] = useState(false);
  const [item, setItem] = useState({});

  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const callAPI = async () => {
      setLoading(true);
      const tokens = cookieSplitter(document.cookie);
      try{
        const res = await axios.get(`http://localhost:8000/tpo/fetch_emails/${tokens.jwt}`);
        setLoading(false);
        setMessages(res.data);
        console.log(res.data);
      }catch(err){
        console.log("Error in fetching emails ",err);
      }
    }

    callAPI();
  }, [])

  async function rtx(item) {
    console.log("hello ", item);
    setItem(item);
    setactive(true);
  }

  return (
    <section className="relative max-w-screen-xl mx-auto py-4 px-4 md:px-8">
      {loading && 
      <div className="relative z-10 gap-5 items-center lg:flex">
        <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
          <h3 className="text-3xl text-gray-800 font-semibold md:text-4xl">
            Fostering a vibrant workplace culture means{" "}
            <span className="text-indigo-600">
              {" "}
              fostering organization's heart
            </span>
          </h3>
          <p className=" leading-relaxed mt-3 text-left">HRs Section of NITJ</p>
        </div>

        <div className="flex-1 mt-5 mx-auto sm:w-9/12 lg:mt-0 lg:w-auto gif-and-text">
          <img
            // src="https://i.postimg.cc/kgd4WhyS/container.png"
            src="/staffing.gif"
            alt=""
            className="w-full"
          />
        </div>
      </div>}

      <div>
        <div className="container">
          <div className="first_div">
            {messages.map((item, index) => {
              return (
                <div className="outside" key={index}>
                  <div className="inside">
                    <p className="text-3xl text-gray-800 font-semibold md:text-4xl">
                      {item.title}
                    </p>
                    <button className="btn_hr" onClick={() => rtx(item)}>Click</button>
                  </div>
                  <p className="text-2xl text-gray-800 font-semibold md:text-2xl text-left">
                    {item.sender}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="second_div">{active && <C1 item={item.msg_body}></C1>}</div>
        </div>
      </div>
    </section>
  );
};



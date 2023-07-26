import "./App.css";
import logo from "./images/logo.png";
import logo2 from "./images/right_logo.png";
import landing from "./images/landing-page-design.svg";
import { SlArrowDown } from "react-icons/sl";
import { BiSearch } from "react-icons/bi";
import { ImInfo, ImPause } from "react-icons/im";
import { MdOutlineEdit } from "react-icons/md";
import { FaStarHalfAlt } from "react-icons/fa";
import { BsStar } from "react-icons/bs";
import {
  AiOutlinePlayCircle,
  AiOutlineDownload,
  AiOutlineLink,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";

function App() {
  return (
    <div className="App">
      <div className="Navbar">
        <div className="nav_child_1">
          <img src={logo} alt="" />
          <h1>ADHARSH FOOD PRODUCTS</h1>
        </div>
        <div className="nav_child_2">
          <img src={logo2} alt="" />
          <SlArrowDown color="white" />
        </div>
      </div>
      <div className="container_1">
        <div className="cont_1_child1_box">
          <div className="fist_div_of_gatePass">
            <div>
              <div className="outGate_pass">
                <h2>IN / OUT Gate Pass</h2>
              </div>
            </div>
            <div>
              <div className="search_box_div">
                <BiSearch />
                <input type="text" placeholder="Search" />
              </div>
            </div>
            <div>
              <div className="get_new_pass">
                <h3>New Gate Pass</h3>
              </div>
            </div>
          </div>

          <div className="stock_container_mani_box">
            <div>
              <div className="Stock_info_div">
                <p>Stock</p>
                <ImInfo color="grey" size="13" />
              </div>
              <h2>100,000</h2>
            </div>
            <div>
              <div className="Stock_info_div">
                <p>Stock</p>
                <ImInfo color="grey" size="13" />
              </div>
              <h2>100,000</h2>
            </div>
            <div>
              <div className="Stock_info_div">
                <p>Stock</p>
                <ImInfo color="grey" size="13" />
              </div>
              <h2>100,000</h2>
            </div>
            <div>
              <div className="Stock_info_div">
                <p>Stock</p>
                <ImInfo color="grey" size="13" />
              </div>
              <h2>100,000</h2>
            </div>
          </div>

          <div className="detail_container">
            <div className="detail_navbar_main">
              <div className="white_circle">
                <div></div>
              </div>
              <div className="slip_number">
                <p>Slip Number #123456</p>
              </div>
              <div className="loading_div">
                <p>Loading</p>
              </div>
              <div className="loading_div2">
                <p>Loading</p>
              </div>

              <div class="progress-bar">
                <div class="progress">
                  <div className="prog_inner_bar"></div>
                </div>
                <span>75%</span>
              </div>
              <div className="play_pause_download_div">
                <div>
                  <MdOutlineEdit size="16" color="#8f00b3" />
                </div>
                <div>
                  <ImPause size="15" color="#8f00b3" />
                </div>
                <div>
                  <AiOutlinePlayCircle size="17" color="#8f00b3" />
                </div>
                <div>
                  <AiOutlineDownload size="17" color="#8f00b3" />
                </div>
                <div>
                  <AiOutlineLink size="17" color="#8f00b3" />
                </div>
              </div>
              <div className="star_div">
                <AiFillStar color="gold" size="25" />
                <AiFillStar color="gold" size="25" />
                <AiFillStar color="gold" size="25" />
                <FaStarHalfAlt color="gold" size="20" />
                <BsStar color="gold" size="21" />
              </div>
            </div>

            <div className="field_box_div">
              <div className="truck_num">
                <p>Truck Number</p>
                <input type="text" placeholder="HR29 BD 2345" />
              </div>
              <div>
                <p>Field</p>
                <input type="text" />
              </div>
              <div>
                <p>Field</p>
                <input type="text" />
              </div>
              <div>
                <p>Field</p>
                <input type="text" />
              </div>
              <div>
                <p>Field</p>
                <input type="text" />
              </div>
              <div>
                <p>Field</p>
                <input type="text" />
              </div>
              <div>
                <p>Field</p>
                <input type="text" />
              </div>
              <div>
                <p>Field</p>
                <input type="text" />
              </div>
              <div>
                <p>Field</p>
                <input type="text" />
              </div>
              <div>
                <p>Field</p>
                <input type="text" />
              </div>
              <div>
                <p>Field</p>
                <input type="text" />
              </div>
              <div>
                <p>Field</p>
                <input type="text" />
              </div>
              <div>
                <p>Field</p>
                <input type="text" />
              </div>
              <div>
                <p>Field</p>
                <input type="text" />
              </div>
            </div>
            <div className="detail_secon_navbar">
              <SlArrowDown className="detail_secon_navbar_arrow" />
            </div>
            <div className="detail_secon_navbar_body"></div>
          </div>

          <div className="detail_container">
            <div className="detail_navbar_main">
              <div className="white_circle">
                <div></div>
              </div>
              <div className="slip_number">
                <p>Slip Number #123456</p>
              </div>
              <div className="loading_div">
                <p>Loading</p>
              </div>
              <div className="loading_div2">
                <p>Loading</p>
              </div>

              <div class="progress-bar">
                <div class="progress">
                  <div className="prog_inner_bar"></div>
                </div>
                <span>75%</span>
              </div>
              <div className="play_pause_download_div">
                <div>
                  <MdOutlineEdit size="16" color="#8f00b3" />
                </div>
                <div>
                  <ImPause size="15" color="#8f00b3" />
                </div>
                <div>
                  <AiOutlinePlayCircle size="17" color="#8f00b3" />
                </div>
                <div>
                  <AiOutlineDownload size="17" color="#8f00b3" />
                </div>
                <div>
                  <AiOutlineLink size="17" color="#8f00b3" />
                </div>
              </div>
              <div className="star_div">
                <AiFillStar color="gold" size="25" />
                <AiFillStar color="gold" size="25" />
                <AiFillStar color="gold" size="25" />
                <FaStarHalfAlt color="gold" size="20" />
                <BsStar color="gold" size="21" />
              </div>
            </div>

            <div className="field_box_div">
              <div className="truck_num">
                <p>Truck Number</p>
                <input type="text" placeholder="HR29 BD 2345" />
              </div>
              <div>
                <p>Field</p>
                <input type="text" />
              </div>
              <div>
                <p>Field</p>
                <input type="text" />
              </div>
              <div>
                <p>Field</p>
                <input type="text" />
              </div>
              <div>
                <p>Field</p>
                <input type="text" />
              </div>
              <div>
                <p>Field</p>
                <input type="text" />
              </div>
              <div>
                <p>Field</p>
                <input type="text" />
              </div>
              <div>
                <p>Field</p>
                <input type="text" />
              </div>
              <div>
                <p>Field</p>
                <input type="text" />
              </div>
              <div>
                <p>Field</p>
                <input type="text" />
              </div>
              <div>
                <p>Field</p>
                <input type="text" />
              </div>
              <div>
                <p>Field</p>
                <input type="text" />
              </div>
              <div>
                <p>Field</p>
                <input type="text" />
              </div>
              <div>
                <p>Field</p>
                <input type="text" />
              </div>
            </div>
            <div className="detail_secon_navbar">
              <SlArrowDown className="detail_secon_navbar_arrow" />
            </div>
            <div className="detail_secon_navbar_body"></div>
          </div>
        </div>

        {/* ==========================Child 2====================================== */}
        <div className="cont_1_child2_box">
          <div className="child2_right_side_box">
            <div className="right_image_with_choose">
              <img src={logo2} alt="" />
              <p>Hi, Keval Here choose one option.</p>
            </div>
            <div className="menu_notification_most_div">
              <p>Menu</p>
              <p>Notificatin</p>
              <p>Most Searched</p>
            </div>
          </div>

          <div className="right_second_box">
            <img src={landing} alt="" />
          </div>
          <div className="right_second_box">
            <img src={landing} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import Card from "../components/Card";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import bars from "../assets/bars.png";
import clock from "../assets/clock.png";
import user from "../assets/user.png";
import briefcase from "../assets/briefcase.png";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import tick from "../assets/tick.png";
import untick from "../assets/untick.png";
import { useState } from "react";
import CustomGraph from "../components/CustomGraph";
const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState("all");
  const [hide, setHide] = useState(false);
  const [taskData, setTaskData] = useState({
    important: [
      {
        name: "Create a user flow of social application design",
        ticked: true,
        status: 1,
      },
      {
        name: "Create a user flow of social application design",
        ticked: true,
        status: 1,
      },
      {
        name: "Create a user flow of social application design",
        ticked: false,
        status: 1,
      },
    ],
    all: [
      {
        name: "Landing page design for Fintech project of singapore",
        ticked: true,
        status: 0,
      },
      {
        name: "Landing page design for Fintech project of singapore",
        ticked: false,
        status: 2,
      },
      {
        name: "Landing page design for Fintech project of singapore",
        ticked: true,
        status: 1,
      },
    ],
    notes: [
      {
        name: "Interactive prototype for app screens of deltamine project",
        ticked: true,
        status: 1,
      },
      {
        name: "Create a user flow of social application design",
        ticked: true,
        status: 1,
      },
      {
        name: "Create a user flow of social application design",
        ticked: false,
        status: 1,
      },
    ],
    links: [
      {
        name: "Landing page design for Fintech project of singapore",
        ticked: true,
        status: 0,
      },
      {
        name: "Create a user flow of social application design",
        ticked: false,
        status: 2,
      },
      {
        name: "Landing page design for Fintech project of singapore",
        ticked: true,
        status: 1,
      },
    ],
  });
  const getColorForPercentage = (percentage) => {
    const hue = (percentage / 100) * 120;
    return `hsl(${hue}, 100%, 50%)`;
  };

  const getStyles = (percentage) => {
    return {
      path: {
        strokeDasharray: `${percentage}, 100`,
        stroke: getColorForPercentage(percentage),
        strokeWidth: 15,
      },
    };
  };
  return (
    <div className="min-h-full w-full flex">
      <div className={`${hide ? `w-1/12` : `w-1/6`}`}>
        <Sidebar hide={hide} setHide={setHide} />
      </div>
      <div
        className={`flex flex-col bg-[#ebdfd7] ${
          hide ? `w-11/12 ` : `w-5/6 `
        } right-0`}
      >
        <Header />

        <div className="flex flex-col p-4 h-full">
          <div className="flex justify-between">
            <div>Overview</div> <div>Last 30 days</div>
          </div>
          <div className="grid grid-cols-8 gap-4 mt-4">
            <div className=" col-span-2">
              <Card
                title="Total revenue"
                varient="bg-[#D398E7] rounded-full p-2 h-8 w-8 mb-3"
                logo={<img className=" " src={bars} />}
                subtitle={<div>$53,00989</div>}
                result="12% increase from last month"
              />
            </div>
            <div className=" col-span-2">
              <Card
                title="Projects"
                varient="bg-[#E89271] rounded-full p-2 h-8 w-8 mb-3"
                logo={<img className=" " src={briefcase} />}
                subtitle={
                  <div className="flex items-end">
                    <div>95</div>
                    <div className="text-sm ml-2">/100</div>
                  </div>
                }
                result="10% decrease from last month"
              />
            </div>
            <div className=" col-span-2">
              <Card
                title="Time spent"
                varient="bg-[#70A1E5] rounded-full p-2 h-8 w-8 mb-3"
                logo={<img className=" " src={clock} />}
                subtitle={
                  <div className="flex items-end">
                    <div>1022</div>
                    <div className="text-sm ml-2">/1300 Hrs</div>
                  </div>
                }
                result="8% increase from last month"
              />
            </div>
            <div className=" col-span-2">
              <Card
                title="Total revenue"
                varient="bg-[#D398E7] rounded-full p-2 h-8 w-8 mb-3"
                logo={<img className=" " src={user} />}
                subtitle={<div>$53,00989</div>}
                result="12% increase from last month"
              />
            </div>
          </div>

          <div className="grid grid-cols-8 mt-4 gap-4">
            <div className="col-span-5 flex flex-col bg-[#f2eae5] rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className=" font-medium">Project Summary</div>
                <div>
                  <select className="p-2 mx-2 rounded-full">
                    <option value="">Project</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                  <select className="p-2 mx-2 rounded-full">
                    <option value="">Project manager</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                  <select className="p-2 mx-2 rounded-full">
                    <option value="">Status</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>
              </div>
              <div>
                <div className="relative overflow-x-auto">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase border-b-2 border-[#00000014]">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Project manager
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Due date
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Status
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Progress
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="h-20">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                        >
                          Nelsa web developement
                        </th>
                        <td className="px-6 py-4">Om prakash sao</td>
                        <td className="px-6 py-4">May 25, 2023</td>
                        <td className="px-6 py-4">Completed</td>
                        <td className="px-6 py-4">
                          <CircularProgressbar
                            className="max-h-10"
                            value={100}
                            styles={getStyles(100)}
                            text="100%"
                          />
                        </td>
                      </tr>
                      <tr className="">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                        >
                          Datascale AI app
                        </th>
                        <td className="px-6 py-4">Neilsan mando</td>
                        <td className="px-6 py-4">Jun 20, 2023</td>
                        <td className="px-6 py-4">Delayed</td>
                        <td className="px-6 py-4">
                          <CircularProgressbar
                            className="max-h-10"
                            value={35}
                            styles={getStyles(35)}
                            text="35%"
                          />
                        </td>
                      </tr>
                      <tr className="">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                        >
                          Datascale AI app
                        </th>
                        <td className="px-6 py-4">Neilsan mando</td>
                        <td className="px-6 py-4">Jun 20, 2023</td>
                        <td className="px-6 py-4">Delayed</td>
                        <td className="px-6 py-4">
                          <CircularProgressbar
                            className="max-h-10"
                            value={68}
                            styles={getStyles(68)}
                            text="68%"
                          />
                        </td>
                      </tr>
                      <tr className="">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                        >
                          Datascale AI app
                        </th>
                        <td className="px-6 py-4">Neilsan mando</td>
                        <td className="px-6 py-4">Jun 20, 2023</td>
                        <td className="px-6 py-4">Delayed</td>
                        <td className="px-6 py-4">
                          <CircularProgressbar
                            className="max-h-10"
                            value={50}
                            styles={getStyles(50)}
                            text="50%"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-span-3 flex flex-col justify-between bg-[#f2eae5] rounded-lg p-4">
              <div className="flex w-full items-center justify-between mb-2">
                <div className=" font-medium">Overall Progress</div>
                <div>
                  <select className="p-2 mx-2 rounded-full">
                    <option value="">All</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-center items-center h-full w-full">
                <CircularProgressbar
                  circleRatio={-0.5}
                  className=" w-60"
                  value={50}
                  styles={{
                    trail: {
                      transform: "rotate(0.25turn)",
                      transformOrigin: "center center",
                    },
                  }}
                  text={
                    <tspan style={{ display: "flex", flexDirection: "column" }}>
                      <tspan
                        dy={-15}
                        style={{ fontSize: "16px", fill: "#333" }}
                      >
                        50
                      </tspan>
                      <tspan
                        dy={15}
                        dx={-25}
                        style={{ fontSize: "6px", fill: "#666" }}
                      >
                        Completed
                      </tspan>
                    </tspan>
                  }
                />
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <div className="text-xl">95</div>
                  <div className="text-sm text-gray-500">Total Projects</div>
                </div>
                <div className="flex flex-col">
                  <div className="text-xl text-green-600">26</div>
                  <div className="text-sm text-gray-500">Completed</div>
                </div>
                <div className="flex flex-col">
                  <div className="text-xl text-yellow-500">35</div>
                  <div className="text-sm text-gray-500">Delayed</div>
                </div>
                <div className="flex flex-col">
                  <div className="text-xl text-red-500">35</div>
                  <div className="text-sm text-gray-500">On going</div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-8 mt-4 gap-4">
            <div className="col-span-5 flex flex-col bg-[#f2eae5] rounded-lg p-4">
              <div className=" font-medium mb-4">Todays Task</div>
              <div className="flex flex-col">
                <div className="flex mb-4">
                  <div
                    onClick={() => setSelectedTab("all")}
                    className={`px-4 pb-2 cursor-pointer ${
                      selectedTab == "all" && `border-b-2 border-b-blue-500`
                    } `}
                  >
                    All
                  </div>
                  <div
                    onClick={() => setSelectedTab("important")}
                    className={`px-4 pb-2 cursor-pointer ${
                      selectedTab == "important" &&
                      `border-b-2 border-b-blue-500`
                    } `}
                  >
                    Important
                  </div>
                  <div
                    onClick={() => setSelectedTab("notes")}
                    className={`px-4 pb-2 cursor-pointer ${
                      selectedTab == "notes" && `border-b-2 border-b-blue-500`
                    } `}
                  >
                    Notes
                  </div>
                  <div
                    onClick={() => setSelectedTab("links")}
                    className={`px-4 pb-2 cursor-pointer ${
                      selectedTab == "links" && `border-b-2 border-b-blue-500`
                    } `}
                  >
                    Links
                  </div>
                </div>
                {taskData[selectedTab].map((task, key) => (
                  <div className="flex items-center py-2" key={key}>
                    <div
                      className="mr-2 cursor-pointer"
                      onClick={() =>
                        setTaskData((prevTaskData) => ({
                          ...prevTaskData,
                          [selectedTab]: prevTaskData[selectedTab].map(
                            (task, index) => {
                              if (index === key) {
                                return {
                                  ...task,
                                  ticked: !task.ticked,
                                };
                              }
                              return task;
                            }
                          ),
                        }))
                      }
                    >
                      {task.ticked ? <img src={tick} /> : <img src={untick} />}
                    </div>
                    {task.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-3 flex flex-col justify-between bg-[#f2eae5] rounded-lg p-4">
              <div className="flex w-full items-center justify-between mb-2">
                <div className=" font-medium">Overall Progress</div>
                <div>
                  <select className="p-2 mx-2 rounded-full">
                    <option value="">All</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>
              </div>
              <div>
                <CustomGraph
                  data={{
                    Sam: 5,
                    Meldy: 1,
                    Ken: 2,
                    Dmitry: 6,
                    Vego: 7,
                    Kadin: 2,
                    Melm: 4,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

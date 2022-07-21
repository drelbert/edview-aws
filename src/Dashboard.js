import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [
    "Invited Users",
    "Current Users",
    "Inactive Users (20 days)",
    "Targeted Users",
  ],
  datasets: [
    {
      label: "# of Votes",
      data: [18, 30, 15, 9],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
      ],
    },
  ],
};

const Dashboard = () => {
  return (
    <div>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-4 lg:px-4">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>
      </header>

      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-4 sm:px-0">
            <div className="border-2 shadow-lg border-gray-200 rounded-lg h-96 text-black">
              <div className="flex flex-row ">
                <div className="basis-1/3  ">
                  <h3 className="text-center">Current User Data</h3>
                  <Doughnut data={data} />
                </div>
                <div className="basis-1/3  ">
                  <h3 className="text-center">ToDo Data</h3>
                  <Doughnut data={data} />
                </div>
                <div className="basis-1/3 ">
                  <h3 className="text-center">Placeholder Data</h3>
                  <Doughnut data={data} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

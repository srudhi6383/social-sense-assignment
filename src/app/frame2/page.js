import React from "react";
import { MainNav } from "../../components/Frame2/Components/navbar";
import Overview from "../../components/Frame2/Components/overview";
import { UserNav } from "../../components/Frame2/Components/nav";
import { Button } from "../../components/Ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/Ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/Ui/tabs";
import Image from "next/image";
import LineChart from "../../components/Frame2/Components/line-chart";
import DoughnutChart from "../../components/Frame2/Components/doughnut";

const Frame2 = () => {
  return (
    <>
      <div className="w-full h-fit flex-col bg-slate-100">
        <div className="m-auto border-b bg-white rounded-xl w-[98%] shadow-lg">
          <div className="flex h-16 items-center px-4">
            <MainNav className="mx-6 hidden sm:flex" />
            <div className="block sm:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            </div>
            <div className="ml-auto flex items-center space-x-4">
              <div>
                <input
                  type="search"
                  placeholder="Search..."
                  className="text-sm sm:text-base rounded-md border-2 sm:w-[80px] md:w-[100px] lg:w-[300px]"
                />
              </div>
              <UserNav />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:gap-10 space-y-4 p-1 sm:p-5 w-full ">
          <div className="flex flex-col sm:flex-row w-full justify-evenly items-center gap-3 ">
            <Tabs
              defaultValue="overview"
              className="w-full sm:w-2/5 "
            >
              <TabsContent
                value="overview"
                className="flex flex-wrap gap-3 w-full"
              >
                <div className="w-full md:w-1/2 lg:w-[45%]">
                  <Card className="w-full shadow-lg">
                    <CardHeader className="flex flex-row items-center gap-2 space-y-0 pb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="text-center h-8 w-8 text-muted-foreground stroke-yellow-600 rounded-full bg-yellow-200 p-[6px]"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                      </svg>
                      <CardTitle className="text-sm font-medium">
                        CUSTOMERS
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-lg font-bold">3,812</div>
                      <p className="text-xs text-muted-foreground text-green-500">
                        +15,73%
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className=" h-1/2 w-full md:w-1/2 lg:w-[45%]">
                  <Card className="w-full shadow-lg">
                    <CardHeader className="flex flex-row items-center gap-2 space-y-0 pb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="text-center h-8 w-8 text-muted-foreground stroke-yellow-600 rounded-full bg-yellow-200 p-[6px]"
                      >
                        <path d="M6 6h15l-1.68 7.74a3 3 0 0 1-2.94 2.26H8.62a3 3 0 0 1-2.94-2.26L4 6H3" />
                        <circle cx="9" cy="21" r="1" />
                        <circle cx="20" cy="21" r="1" />
                      </svg>
                      <CardTitle className="text-sm font-medium">
                        ORDERS
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-lg font-bold">1,658</div>
                      <p className="text-xs text-muted-foreground text-green-500">
                        +21,15%
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="w-full md:w-1/2 lg:w-[45%]">
                  <Card className="w-full shadow-lg">
                    <CardHeader className="flex flex-row items-center gap-2 space-y-0 pb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="text-center h-8 w-8 text-muted-foreground stroke-yellow-600 rounded-full bg-yellow-200 p-[6px]"
                      >
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                        <text x="12" y="20" fontSize="8" textAnchor="middle" fill="currentColor">$</text>
                      </svg>
                      <CardTitle className="text-sm font-medium">
                        REVENUE
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-lg font-bold">2000</div>
                      <p className="text-xs text-muted-foreground text-green-500">
                        +12,76%
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="w-full md:w-1/2 lg:w-[45%]">
                  <Card className="w-full shadow-lg">
                    <CardHeader className="flex flex-row items-center gap-2 space-y-0 pb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="text-center h-8 w-8 text-muted-foreground stroke-yellow-600 rounded-full bg-yellow-200 p-[6px]"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                        <polyline points="16 6 18 6 18 8" fill="none" />
                        <path d="M18 6L12 12M12 12L6 18M12 12L9 15" />
                      </svg>
                      <CardTitle className="text-sm font-medium">
                        GROWTH
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-lg font-bold">2000</div>
                      <p className="text-xs text-muted-foreground text-green-500">
                        +32,56%
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
            <div className="w-full sm:w-1/2 flex items-center justify-center py-8">
              <Overview />
            </div>
          </div>
          <div className="w-full flex flex-col lg:flex-row gap-4 h-fit px-4 sm:px-8">
            <div className="w-full lg:w-3/5 p-2">
              <LineChart />
            </div>
            <div className="w-full lg:w-2/5">
              <DoughnutChart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Frame2;

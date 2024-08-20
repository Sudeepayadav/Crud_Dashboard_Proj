import React, { useState } from "react";
import Category from "./Category";
import { TfiReload } from "react-icons/tfi";
import { FiMoreVertical } from "react-icons/fi";
import { MdAccessTimeFilled, MdSafetyCheck } from "react-icons/md";

const Dashboard = () => {
  const [categories, setCategories] = useState([
    {
      id: "cspm-dashboard",
      name: "CSPM Executive Dashboard",
      widgets: [
        {
          id: "widget-1",
          name: "Cloud Accounts",
          text: "Random text for widget 1",
        },
        {
          id: "widget-2",
          name: "Cloud Account risk assesment 2",
          text: "Random text for widget 2",
        },
      ],
    },
    {
      id: "security-dashboard",
      name: "Security Dashboard",
      widgets: [
        {
          id: "widget-2",
          name: "Top 5 Namespace specific alerts",
          text: "Random text for widget 2",
        },
        {
          id: "widget-5",
          name: "Work load alerts",
          text: "Random text for widget 2",
        },
      ],
    },
  ]);

  //
  const [cat, setCat] = useState([
    {
      id: "Registry Scan",
      name: "Registry Scan",
      widgets: [
        {
          id: "widget-3",
          name: "Image Risk Assessment",
          text: "170 total vulnerabilities",
          color: "#FF5733",
          colorName: "Widget 3", 
        },
        {
          id: "widget-4",
          name: "Image Security Issue",
          text: "2 total images ",
          color: "green",
          colorName: "Widget 4",
        },
      ],
    },
  ]);
  //

  const addWidget = (categoryId, newWidget) => {
    setCategories(
      categories.map((category) =>
        category.id === categoryId
          ? { ...category, widgets: [...category.widgets, newWidget] }
          : category
      )
    );
  };

  //
  const addWid = (categoryId, newWidget) => {
    setCat(
      cat.map((cate) =>
        cate.id === categoryId
          ? { ...cate, widgets: [...cate.widgets, newWidget] }
          : cate
      )
    );
  };

  const removeWid = (categoryId, widgetId) => {
    setCat(
      cat.map((cate) =>
        cate.id === categoryId
          ? {
              ...cate,
              widgets: cate.widgets.filter((widget) => widget.id !== widgetId),
            }
          : cate
      )
    );
  };
  //

  const removeWidget = (categoryId, widgetId) => {
    setCategories(
      categories.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              widgets: category.widgets.filter(
                (widget) => widget.id !== widgetId
              ),
            }
          : category
      )
    );
  };

  return (
    <div className="bg-gray-200 ">
       <div className="flex flex-col sm:flex-row items-center justify-between mx-5 pt-4">
      <h2 className="text-base font-semibold my-3 flex-1 text-center sm:text-left">
        CNAPP Dashboard
      </h2>
      <div className="flex flex-wrap justify-center sm:justify-end space-x-3 space-y-3 sm:space-y-0">
        <button className="border border-gray-500 rounded-lg p-2 w-full sm:w-auto">
          Add Widget ➕
        </button>
        <button className="border-2 border-gray-500 rounded-lg p-2 w-full sm:w-auto">
          <TfiReload />
        </button>
        <button className="border-2 border-gray-500 rounded-lg p-2 w-full sm:w-auto">
          <FiMoreVertical />
        </button>
        <button className="flex items-center justify-center border-2 border-indigo-900 rounded-lg p-2 w-full sm:w-auto">
          <MdAccessTimeFilled className="mr-2" /> Last 2 Days
        </button>
      </div>
    </div>

      <div className="container mx-auto p-5 rounded-xl">
        {categories.map((category) => (
          <Category
            key={category.id}
            category={category}
            onAddWidget={addWidget}
            onRemoveWidget={removeWidget}
          />
        ))}
      </div>

      <div className="container mx-auto p-4">
        {cat.map((cate) => (
          <Category
            key={cate.id}
            category={cate}
            onAddWidget={addWid}
            onRemoveWidget={removeWid}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

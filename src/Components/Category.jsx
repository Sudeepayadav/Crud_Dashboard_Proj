import React from "react";
import Widget from "./Widget";
import AddWidgetForm from "./AddWidgetForm";

const Category = ({ category, onAddWidget, onRemoveWidget }) => (
  <>
   
    <div className="mb-6">
      <h2 className="text-base font-semibold mb-1">{category.name}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {category.widgets.map((widget) => (
          <Widget
            key={widget.id}
            widget={widget}
            onRemove={() => onRemoveWidget(category.id, widget.id)}
          />
        ))}
        <AddWidgetForm
          onAdd={(newWidget) => onAddWidget(category.id, newWidget)}
        />
      </div>
    </div>
  </>
);

export default Category;

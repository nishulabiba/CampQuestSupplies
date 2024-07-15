import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Product } from "../../../types/Types";
import CategoryComponent from "../../../components/CategoryComponent/CategoryComponent";

interface CategoryProps {
  products: Product[];
}

const Category: React.FC<CategoryProps> = ({ products }) => (
  <Tabs id="t" className="bg-slate-100 mx-auto md:px-10 rounded-xl ">
    <TabList className="tab tabs tabs-lifted tabs-bordered mb-10">
      <Tab className="tab tab-lifted">Camping Gear</Tab>
      <Tab className="tab tab-lifted">Camping Furniture</Tab>
      <Tab className="tab tab-lifted">Coolers</Tab>
      <Tab className="tab tab-lifted">Cooking Equipment</Tab>
      <Tab className="tab tab-lifted">Electronics</Tab>
      <Tab className="tab tab-lifted">Sleeping Gear</Tab>
      <Tab className="tab tab-lifted">Safety</Tab>
      <Tab className="tab tab-lifted">Backpacks</Tab>
    </TabList>
    <TabPanel>
      <CategoryComponent products={products} category="Camping Gear" />
    </TabPanel>
    <TabPanel>
      <CategoryComponent products={products} category="Camping Furniture" />
    </TabPanel>
    <TabPanel>
      <CategoryComponent products={products} category="Coolers" />
    </TabPanel>
    <TabPanel>
      <CategoryComponent products={products} category="Cooking Equipment" />
    </TabPanel>
    <TabPanel>
      <CategoryComponent products={products} category="Electronics" />
    </TabPanel>
    <TabPanel>
      <CategoryComponent products={products} category="Sleeping Gear" />
    </TabPanel>
    <TabPanel>
      <CategoryComponent products={products} category="Safety" />
    </TabPanel>
    <TabPanel>
      <CategoryComponent products={products} category="Backpacks" />
    </TabPanel>
  </Tabs>
);

export default Category;

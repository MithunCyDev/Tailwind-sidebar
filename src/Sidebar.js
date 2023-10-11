import React, { useState } from "react";
import "./Sidebar.css";

import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";

import inventory from '../assets/Inventory.png'

import { useNavigate } from "react-router-dom";
import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";


function Sidebar() {
  const navigate = useNavigate();
  const [dropdowns, setDropdowns] = useState({
    inventory: false,
    inbound: false,
    warehouse: false,
  });
  const [open, setOpen] = React.useState(0);
  const [collapsed, setCollapsed] = useState(false);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const toggleDropdown = (name) => {
    setDropdowns((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <div className="flex h-screen">
      <Card className="flex flex-col h-screen w-full min-w-[240px] px-3 py-4 shadow-blue-gray-900/5 bg-bg-green">
        {/* Arrow */}
        <div className="mb-2 p-4 text-white flex justify-center">
          <BsArrowLeftSquare className="w-[30px] h-[30px] cursor-pointer"/>
        </div>

        {/* Full List Section */}
        <List className="text-white gap-4 h-full overflow-y-auto">
          
          {/* Inventory/WMS */}
          <Accordion
            open={open === 1}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto mt-2 h-4 w-4 transition-transform ${
                  open === 1 ? "rotate-180" : ""
                }`}
              />
            }
          >
            <ListItem className="p-0 bg-green" selected={open === 1}>
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className="border-b-0 p-3"
              >
                <ListItemPrefix>
                  <img src={inventory} alt="" className="h-8 w-8" />
                </ListItemPrefix>
                <Typography
                  className="mr-auto my-auto font-normal"
                >
                  Inventory/WMS
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  inventory
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  inbound
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  warehouse
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>

          <Accordion
            open={open === 2}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto mt-2 h-4 w-4 transition-transform ${
                  open === 2 ? "rotate-180" : ""
                }`}
              />
            }
          >
            <ListItem className="p-0 bg-green" selected={open === 2}>
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className="border-b-0 p-3"
              >
                <ListItemPrefix>
                  <ShoppingBagIcon className="h-8 w-8" />
                </ListItemPrefix>
                <Typography
                  className="mr-auto my-auto font-normal"
                >
                  Operations
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0 bg-green">
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  CRM
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Products
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>

          <ListItem className="bg-green">
            <ListItemPrefix>
              <InboxIcon className="h-8 w-8" />
            </ListItemPrefix>
            CRM
            <ListItemSuffix>
              {/* <Chip
                value="14"
                size="sm"
                variant="ghost"
                color="blue-gray"
                className="rounded-full"
              /> */}
            </ListItemSuffix>
          </ListItem>

          <ListItem className="bg-green">
            <ListItemPrefix>
              <UserCircleIcon className="h-8 w-8" />
            </ListItemPrefix>
            Logistics
          </ListItem>

          <ListItem className="bg-green">
            <ListItemPrefix>
              <Cog6ToothIcon className="h-8 w-8" />
            </ListItemPrefix>
            Accounting
          </ListItem>

          <ListItem className="bg-green">
            <ListItemPrefix>
              <Cog6ToothIcon className="h-8 w-8" />
            </ListItemPrefix>
            H.R.
          </ListItem>

          <ListItem className="bg-green">
            <ListItemPrefix>
              <Cog6ToothIcon className="h-8 w-8" />
            </ListItemPrefix>
            I.T.
          </ListItem>

          <ListItem className="bg-green">
            <ListItemPrefix>
              <Cog6ToothIcon className="h-8 w-8" />
            </ListItemPrefix>
            Procurement
          </ListItem>

          <ListItem className="bg-green">
            <ListItemPrefix>
              <Cog6ToothIcon className="h-8 w-8" />
            </ListItemPrefix>
            Marketing
          </ListItem>
        </List>
      </Card>
    </div>
  );
}

export default Sidebar;

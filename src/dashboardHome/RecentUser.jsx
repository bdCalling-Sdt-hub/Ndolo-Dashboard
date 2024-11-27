import React, { useState } from "react";
import { Modal, Table, Tooltip, Input, Button } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

const RecentUser = ({ state }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchName, setSearchName] = useState(""); // Track the input name for searching
  const [filteredData, setFilteredData] = useState([]); // Store filtered data

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Handle the search by name
  const handleSearch = () => {
    if (searchName) {
      const result = data.filter((item) =>
        item.userName.toLowerCase().includes(searchName.toLowerCase()) // Case-insensitive search
      );
      setFilteredData(result); // Update filtered data
    } else {
      setFilteredData(data); // If no search name, show all data
    }
  };

  const columns = [
    {
      title: "#SI",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "User Name",
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Join Date",
      dataIndex: "joinDate",
      key: "joinDate",
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Tooltip title="More Info">
          <InfoCircleOutlined
            onClick={showModal}
            style={{ color: "#5c3c92", fontSize: "18px", cursor: "pointer" }}
          />
        </Tooltip>
      ),
    },
  ];

  // Sample data
  const data = [
    {
      id: 1,
      userName: "Enrique",
      email: "abc@gmail.com",
      phoneNumber: "12345678",
      joinDate: "16 Apr 2024",
    },
    {
      id: 2,
      userName: "Sophia",
      email: "sophia@gmail.com",
      phoneNumber: "87654321",
      joinDate: "15 Apr 2024",
    },
    {
      id: 3,
      userName: "John",
      email: "john@gmail.com",
      phoneNumber: "11223344",
      joinDate: "14 Apr 2024",
    },
    // Add more rows as needed
  ];

  // If no search is active, show all data; otherwise, show filtered data
  const displayData = filteredData.length > 0 ? filteredData : data;

  return (
    <div className="p-5 bg-[#ece6ee] rounded-md mt-5">
      <h3 className="mb-5 font-semibold text-xl">{state}</h3>


      {/* Display Table with Search Results */}
      <Table
        columns={columns}
        dataSource={displayData}
        pagination={false}
        rowKey="id"
        bordered
        style={{
          borderRadius: "10px",
          overflow: "hidden",
        }}
        scroll={{ x: "max-content" }} // Enables horizontal scroll when the table width exceeds the container
      />

      {/* Modal for User Details */}
      <Modal
        open={isModalOpen}
        footer={null} // Remove default footer
        onCancel={closeModal} // Close modal on clicking outside or pressing ESC
        centered
      >
        <h2 className="text-xl font-semibold text-center">User Details</h2>
        <div className="my-20">
          <div className="flex justify-between items-center mt-5 font-semibold">
            <span>User Name</span>
            <span>Enrique</span>
          </div>
          <div className="flex justify-between items-center mt-5 font-semibold">
            <span>Email</span>
            <span>abc@gmail.com</span>
          </div>
          <div className="flex justify-between items-center mt-5 font-semibold">
            <span>Phone number</span>
            <span>12345678</span>
          </div>
          <div className="flex justify-between items-center mt-5 font-semibold">
            <span>Address</span>
            <span>2715 Ash Dr. San Jose, South Dakota 83475</span>
          </div>
          <div className="flex justify-between items-center mt-5 font-semibold">
            <span>Joining date</span>
            <span>16 Aug 2023</span>
          </div>
        </div>
        <div className="mt-10 flex justify-center gap-5 items-center">
          <button className="bg-[#430750] text-white py-2 rounded-xl px-8 font-semibold">
            Block
          </button>
          <button className="border-[#430750] border-[1px] text-[#430750] py-2 rounded-xl px-8 font-semibold">
            Unblock
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default RecentUser;

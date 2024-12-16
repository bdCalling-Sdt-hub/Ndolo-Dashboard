import React, { useState } from 'react';
import { DatePicker, Modal, Table, Tooltip, Input, Form, Button } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { IoSearchOutline } from "react-icons/io5";
import moment from "moment"; // To handle date comparison
import { FiPlus } from 'react-icons/fi';

const Admins = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAddAdminModalOpen, setIsAddAdminModalOpen] = useState(false); // State for Add Admin Modal
    const [selectedUser, setSelectedUser] = useState(null); // Store selected user details
    const [currentPage, setCurrentPage] = useState(1); // Pagination state
    const [pageSize, setPageSize] = useState(5); // Rows per page
    const [searchQuery, setSearchQuery] = useState(""); // Search query state
    const [selectedDate, setSelectedDate] = useState(null); // Selected date for filtering

    const showModal = (user) => {
        setSelectedUser(user);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedUser(null); // Clear selected user when modal closes
    };

    const showAddAdminModal = () => {
        setIsAddAdminModalOpen(true); // Open Add Admin Modal
    };

    const closeAddAdminModal = () => {
        setIsAddAdminModalOpen(false); // Close Add Admin Modal
    };

    const onDateChange = (date, dateString) => {
        setSelectedDate(date ? moment(dateString, "YYYY-MM-DD") : null);
    };

    const columns = [
        {
            title: "#SI",
            dataIndex: "id",
            key: "id",
            render: (text, _, index) => (currentPage - 1) * pageSize + index + 1, // Adjust for pagination
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
            render: (text, record) => (
                <Tooltip title="More Info">
                    <InfoCircleOutlined
                        onClick={() => showModal(record)}
                        style={{ color: "#5c3c92", fontSize: "18px", cursor: "pointer" }}
                    />
                </Tooltip>
            ),
        },
    ];

    const data = [
        {
            id: 1,
            userName: "Enrique",
            email: "abc@gmail.com",
            phoneNumber: "12345678",
            joinDate: "16 Apr 2024",
            address: "2715 Ash Dr. San Jose, South Dakota 83475",
        },
        {
            id: 2,
            userName: "Sophia",
            email: "sophia@gmail.com",
            phoneNumber: "87654321",
            joinDate: "20 Apr 2024",
            address: "1234 Main St, Los Angeles, California 90012",
        },
        {
            id: 3,
            userName: "User 3",
            email: "user3@gmail.com",
            phoneNumber: "1234567890",
            joinDate: "20 Apr 2024",
        },
        {
            id: 4,
            userName: "User 4",
            email: "user4@gmail.com",
            phoneNumber: "1234567890",
            joinDate: "21 Apr 2024",
        },
        {
            id: 5,
            userName: "User 5",
            email: "user5@gmail.com",
            phoneNumber: "1234567890",
            joinDate: "22 Apr 2024",
        },
        {
            id: 6,
            userName: "User 6",
            email: "user6@gmail.com",
            phoneNumber: "1234567890",
            joinDate: "23 Apr 2024",
        },
        {
            id: 7,
            userName: "User 7",
            email: "user7@gmail.com",
            phoneNumber: "1234567890",
            joinDate: "24 Apr 2024",
        },
    ];

    // Filtered data based on search query and selected date
    const filteredData = data.filter((item) => {
        const matchesSearchQuery =
            item.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.email.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesDate =
            !selectedDate ||
            moment(item.joinDate, "DD MMM YYYY").isSame(selectedDate, "day");

        return matchesSearchQuery && matchesDate;
    });

    return (
        <div className="md:p-4 mt-5 sm:mt-0">
            <div className="flex items-center justify-end">
                <button
                    className="flex items-center gap-2 bg-[#3d1852] text-xl font-semibold py-3 px-8 text-white rounded-lg"
                    onClick={showAddAdminModal} // Open Add Admin Modal
                >
                    <FiPlus className="text-2xl" />
                    Add Admin
                </button>
            </div>

            <div className="p-5 bg-[#ece6ee] rounded-md mt-5">
                <div className="md:flex justify-between mb-5 items-center">
                    <h3 className="font-semibold">User List</h3>
                    <div className="flex items-center flex-wrap gap-2">
                        <DatePicker
                            className="p-2 rounded-full border-0"
                            onChange={onDateChange}
                            format="YYYY-MM-DD"
                        />
                        <input
                            className="md:mx-2 my-2 md:my-0 p-2 rounded-full text-sm"
                            placeholder="Search by Name or Email"
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button className="bg-[#430750] w-10 h-10 rounded-full flex justify-center items-center text-white">
                            <IoSearchOutline className="font-bold" />
                        </button>
                    </div>
                </div>
                <Table
                    columns={columns}
                    dataSource={filteredData}
                    pagination={{
                        current: currentPage,
                        pageSize: pageSize,
                        onChange: (page, pageSize) => {
                            setCurrentPage(page);
                            setPageSize(pageSize);
                        },
                        total: filteredData.length,
                        showSizeChanger: true,
                        position: ["bottomCenter"], // Center the pagination
                        className: "custom-pagination", // Add a custom class for styling
                    }}
                    rowKey="id"
                    bordered
                    style={{
                        borderRadius: "10px",
                        overflow: "hidden",
                        marginTop: "20px", // Adds top margin
                    }}
                    scroll={{ x: "max-content" }} // Adds horizontal scroll if content overflows
                    responsive
                />

                {/* User Detail Modal */}
                <Modal open={isModalOpen} footer={null} onCancel={closeModal} centered>
                    <h2 className="text-xl font-semibold text-center">User Details</h2>
                    <div className="my-10">
                        {selectedUser && (
                            <>
                                <div className="flex justify-between items-center mt-5 font-semibold">
                                    <span>User Name</span>
                                    <span>{selectedUser.userName}</span>
                                </div>
                                <div className="flex justify-between items-center mt-5 font-semibold">
                                    <span>Email</span>
                                    <span>{selectedUser.email}</span>
                                </div>
                                <div className="flex justify-between items-center mt-5 font-semibold">
                                    <span>Phone number</span>
                                    <span>{selectedUser.phoneNumber}</span>
                                </div>
                                <div className="flex justify-between items-center mt-5 font-semibold">
                                    <span>Address</span>
                                    <span>{selectedUser.address}</span>
                                </div>
                                <div className="flex justify-between items-center mt-5 font-semibold">
                                    <span>Joining date</span>
                                    <span>{selectedUser.joinDate}</span>
                                </div>
                            </>
                        )}
                    </div>
                </Modal>

                {/* Add Admin Modal */}
                <Modal
                    open={isAddAdminModalOpen}
                    onCancel={closeAddAdminModal}
                    centered
                    footer={null}
                    
                >
                    <h2 className='text-2xl font-semibold mb-10'>Add New Admin</h2>
                    <Form
                        layout="vertical"
                        onFinish={(values) => {
                            console.log("Admin Added: ", values);
                            closeAddAdminModal(); // Close the modal after adding
                        }}
                    >
                        <Form.Item
                            label="User Name"
                            name="userName"
                            rules={[{ required: true, message: "Please input the user name!" }]}
                        >
                            <Input placeholder="Enter user name" />
                        </Form.Item>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: "Please input the email!" }]}
                        >
                            <Input placeholder="Enter email" />
                        </Form.Item>
                        <Form.Item
                            label="Phone Number"
                            name="phoneNumber"
                            rules={[{ required: true, message: "Please input the phone number!" }]}
                        >
                            <Input placeholder="Enter phone number" />
                        </Form.Item>
                        <Form.Item
                            label="Join Date"
                            name="joinDate"
                            rules={[{ required: true, message: "Please select a join date!" }]}
                        >
                            <DatePicker style={{ width: "100%" }} />
                        </Form.Item>
                        <Form.Item>
                            <button className='py-3 w-full bg-[#3d1852] text-white rounded-lg' type="submit" block>
                                Add Admin
                            </button>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        </div>
    );
};

export default Admins;

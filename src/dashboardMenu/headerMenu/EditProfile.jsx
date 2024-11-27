import { Button, Form, Input, Upload } from "antd";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { LuImagePlus } from "react-icons/lu";
import "react-phone-number-input/style.css";

import defaultUserImage from "./../../../public/image/users.jpg";
import { useGetProfileQuery } from "../../redux/features/profile/profile";
import url from "../../redux/api/baseUrl";
import { useEditProfileMutation } from "../../redux/features/profile/editprofile";
import { fromJSON } from "postcss";
import toast, { Toaster } from "react-hot-toast";
import User_Profile from "../../../public/Dashboard/User_Profile.png";

const EditProfiel = () => {
  const navigate = useNavigate();
  const [fileList, setFileList] = useState([]);
  const { data: profile } = useGetProfileQuery();
  const [phoneNumber, setPhoneNumber] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [form] = Form.useForm(); // Initialize form reference

  useEffect(() => {
    // When profile data is loaded, set the form fields and local state
    if (profile) {
      form.setFieldsValue({
        name: profile.data.attributes.name,
        email: profile.data.attributes.email,
      });
      setPhoneNumber(profile.data.attributes.phoneNumber);
      setImageUrl(profile.data.attributes.image?.publicFileUrl);
    }
  }, [profile, form]);

  const handleUploadChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    if (newFileList[0]?.originFileObj) {
      const reader = new FileReader();
      reader.readAsDataURL(newFileList[0].originFileObj);
      reader.onload = () => setImageUrl(reader.result);
    }
  };
  const [editprofile, { isLoading }] = useEditProfileMutation();

  const handleUpdateProfile = async (values) => {
    // console.log(values);
    // console.log(phoneNumber);

    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("phoneNumber", phoneNumber);
    if (fileList[0]?.originFileObj) {
      formData.append("profile", fileList[0].originFileObj);
    }
    try {
      const res = await editprofile(formData).unwrap();
      // console.log(res);
      if (res?.statusCode == 200) {
        toast.success(res?.message);
      }
      setTimeout(() => {
        navigate("/dashboard/profile");
      }, 1000);
    } catch (error) {
      console.log(error);
      toast.error(error?.data?.message);
    }

    // Your API call to update profile goes here
  };

  return (
    <div className="font-[Aldrich]">
      <Toaster reverseOrder={false} />
      <div
        onClick={() => navigate("/dashboard/profile")}
        className="flex items-center cursor-pointer ml-6 mt-10 mb-16"
      >
        <MdOutlineKeyboardArrowLeft size={30} />
        <h1 className="text-xl font-medium ml-2">Edit Profile</h1>
      </div>

      <div className="sm:mx-6 sm:p-9 rounded-xl bg-white">
        <Form
          form={form} // Attach form reference
          layout="vertical"
          initialValues={{ remember: true }}
          autoComplete="off"
          onFinish={handleUpdateProfile}
        >
          <div className="flex flex-col lg:flex-row gap-10 ">
            {/* Profile Picture Section */}
            <div className="flex flex-col items-center w-full lg:w-1/3 border-dotted border">
              <div className="relative sm:w-56 w-48 sm:h-56 h-48 rounded-full flex justify-center items-center mt-5 bg-gray-50 border">
                <Upload
                  name="profile"
                  showUploadList={false}
                  onChange={handleUploadChange}
                >
                  <img
                    className="w-44 h-44 rounded-full"
                    src={User_Profile}
                    alt="Profile"
                  />
                  <Button
                    className="border-none text-md text-blue-500 absolute bottom-6 flex items-center"
                    icon={<LuImagePlus size={20} className="mr-2" />}
                  >
                    Change Picture
                  </Button>
                </Upload>
              </div>

              <div className="text-center mt-6">
                <p className="text-lg">{"admin"}</p>
                <h1 className="text-2xl font-medium">{"absayed"}</h1>
              </div>
            </div>

            {/* Form Inputs Section */}
            <div className="flex-1 w-full lg:w-2/3">
              <div className="flex flex-col gap-6">
                <Form.Item
                  label={<span className="text-lg font-medium">Name</span>}
                  name="name"
                >
                  <Input
                    placeholder="Name"
                    className="p-4 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  />
                </Form.Item>

                <Form.Item
                  label={<span className="text-lg font-medium">Email</span>}
                  name="email"
                >
                  <Input
                    placeholder="Email"
                    className="p-4 rounded-lg border-gray-300 bg-gray-100"
                    readOnly
                  />
                </Form.Item>

                <div className="flex flex-col">
                  <label className="text-lg font-medium mb-2">
                    Phone Number
                  </label>

                  <PhoneInput
                    placeholder="Enter phone number"
                    international
                    defaultCountry="US"
                    value={phoneNumber}
                    onChange={setPhoneNumber}
                    inputClassName="" // Target the input field
                    className="rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 border-2 px-2"
                     
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Save Changes Button */}
          <div className="flex sm:justify-end justify-center items-center mt-8">
            <Button
              htmlType="submit"
              className="h-14 md:px-20 !bg-[#430750] !text-white rounded-lg text-lg font-medium"
            >
              Save Changes
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default EditProfiel;

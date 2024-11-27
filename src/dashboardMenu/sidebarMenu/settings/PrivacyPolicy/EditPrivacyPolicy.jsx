 

import React, { useState, useRef, useEffect } from "react";
import JoditEditor from "jodit-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { Button, Form } from "antd";
import toast, { Toaster } from "react-hot-toast";
import { useGetPrivacyPolicyQuery } from "../../../../redux/features/settings/privacyPolicy";
import { useUpdatePrivacyMutation } from "../../../../redux/features/settings/updateprivacy";

const EditPrivacyPolicy = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');

  const editor = useRef(null);
  const navigate = useNavigate();

  const { data: privacy } = useGetPrivacyPolicyQuery();
  const [editprivacy, { isLoading }] = useUpdatePrivacyMutation();

  const [content, setContent] = useState('');

  useEffect(() => {
    if (privacy) {
      setContent(privacy?.data?.attributes?.privacyText);
    }
  }, [privacy]);

  const handlePostPrivacy = async () => {
    const dataContent = {
      text: content,  // This will now contain only plain text
      id: id
    };

    try {
      const res = await editprivacy(dataContent).unwrap();
      // console.log(res);
      
      if (res?.statusCode === 200) {
        toast.success(res?.message);
      }
      setTimeout(() => {
        navigate("/dashboard/settings/privacypolicy");
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  // Helper function to strip HTML tags
  const stripHtmlTags = (html) => {
    return html.replace(/<[^>]*>?/gm, ''); // Removes all HTML tags
  };

  return (
    <div className="mt-8 sm:mx-6">
      <Toaster reverseOrder={false} />
      <Link to='/dashboard/settings/privacypolicy' className="flex items-center gap-2">
        <FaCircleArrowLeft className=" text-[#430750] w-8 h-8" />
        <p className=" font-semibold sm:text-[30px] text-xl">Edit Privacy Policy</p>
      </Link>
      <Form
        labelCol={{ span: 22 }}
        wrapperCol={{ span: 40 }}
        layout="vertical"
        initialValues={{
          remember: true,
        }}
        onFinish={handlePostPrivacy}
      >
        <div className="mt-6">
          <JoditEditor
            ref={editor}
            value={content}
            onBlur={(newContent) => {
              const plainText = stripHtmlTags(newContent); // Strips HTML tags
              setContent(plainText); // Sets only the plain text to content
            }}
            onChange={() => {}}
          />
        </div>
        <div className="text-right mt-6">
          <Form.Item>
            <Button
              loading={isLoading}
              htmlType="submit"
              className=" h-[44px] w-full sm:w-[260px] !text-white !bg-[#430750] rounded-[8px]"
            >
              Update Privacy
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default EditPrivacyPolicy;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../components/adminLayout";
import AddMemberPopUp from "../../components/pop_up/addMember"

export default function AddMember() {
  const [showAddMemberPopup,setAddMemberPopup] = useState(false);
  const navigate = useNavigate();
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  });

  const [businessType, setBusinessType] = useState("A");
  const handleCancel = ()=>{
    navigate('/member')
  }

  return (
    <AdminLayout pageTitle="Member Create">
      <p className="font-sideBarSubtitle text-lg md:text-2xl whitespace-nowrap font-thin">
        Add new member
      </p>
      <section className="mt-5">
        <div className="space-y-6">
          {/* Referral Code Section */}
          <div>
            <label
              htmlFor="referralCode"
              className="block mb-2 text-sm font-loginText"
            >
              Referral Code
            </label>
            <input
              type="text"
              name="referralCode"
              id="referralCode"
              className="stroke-[#626262]  w-56 md:w-96  lg:w-2/3  rounded-md font-loginText mb-2"
              placeholder="01111"
              required
            />
            <input
              type="text"
              name="referralName"
              id="referralName"
              className="block stroke-[#626262]  w-56 md:w-96  lg:w-2/3 rounded-md font-loginText bg-[#E3F7FF]"
              placeholder="SuSu /A"
              required
            />
          </div>

          {/* Business Type Section */}
          <div>
            <label
              htmlFor="businessType"
              className="block mb-2 text-sm font-loginText"
            >
              Business Type
            </label>
            <select
              id="businessType"
              name="businessType"
              value={businessType}
              onChange={(e) => setBusinessType(e.target.value)}
              className="stroke-[#626262]  w-56 md:w-96  lg:w-2/3 rounded-md font-loginText mb-2"
              required
            >
              <option value="A">A</option>
              <option value="B">B</option>
            </select>
          </div>

          {/* Member Name Section */}
          <div>
            <label
              htmlFor="memberName"
              className="block mb-2 text-sm font-loginText"
            >
              Member Name
            </label>
            <input
              type="text"
              name="memberName"
              id="memberName"
              className="stroke-[#626262]  w-56 md:w-96  lg:w-2/3 rounded-md font-loginText mb-2"
              placeholder="Htet Myat"
              required
            />
          </div>

          {/* Starting Date Section */}
          <div>
            <label
              htmlFor="startingDate"
              className="block mb-2 text-sm font-loginText"
            >
              Starting Date
            </label>
            <input
              type="date"
              id="startingDate"
              name="startingDate"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="stroke-[#626262]  w-56 md:w-96  lg:w-2/3 rounded-md font-loginText mb-2"
              required
            />
          </div>
        </div>
        <footer className="flex justify-end  w-56 md:w-96  lg:w-2/3">
          <button className="bg-[#32AC36] font-sideBarSubtitle text-white font-semibold w-24 md:w-32 h-10 rounded-md">
            Create
          </button>
        </footer>
      </section>

      <section className="mt-5">
        <div className="space-y-6">
          {/*  Code/UserName Section */}
          <div>
            <label
              htmlFor="referralCode"
              className="block mb-2 text-sm font-loginText"
            >
              Code / UserName
            </label>
            <input
              type="text"
              name="referralCode"
              id="referralCode"
              className="block stroke-[#626262]  w-56 md:w-96  lg:w-2/3 rounded-md font-loginText bg-[#E3F7FF]"
              placeholder="0001111"
              required
            />
          </div>
          {/* Password Section */}
          <div>
            <label
              htmlFor="businessType"
              className="block mb-2 text-sm font-loginText"
            >
              Password
            </label>
            <input
              type="text"
              name="referralCode"
              id="referralCode"
              className="block stroke-[#626262]  w-56 md:w-96  lg:w-2/3 rounded-md font-loginText bg-[#E3F7FF]"
              placeholder="888888"
              required
            />
          </div>
        </div>
        <footer className="flex justify-end  w-56 md:w-96  lg:w-2/3 mt-4 space-x-3">
         <button onClick={handleCancel} className="bg-[#EF4444] font-sideBarSubtitle text-white font-semibold w-32 h-10 rounded-md">Cancel</button>
          <button onClick={()=>setAddMemberPopup(true)}
          className="bg-[#32AC36] font-sideBarSubtitle text-white font-semibold w-32 h-10 rounded-md">Save</button>
       </footer>
      </section>
       {showAddMemberPopup && (
        <AddMemberPopUp
           backMain={() => { 
            setAddMemberPopup(false);
            navigate('/member')}           
           }
          addMember={() => {
            setAddMemberPopup(false);
            navigate("/addMember");
          }}
        />
           )}
    </AdminLayout>
  );
}

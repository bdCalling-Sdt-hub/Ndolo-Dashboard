import { FaCircleArrowLeft } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

export default function AboutUs() {
    const navigate = useNavigate();
  return (
    <div className=" mt-8 sm:mx-6">
    <Link to="/dashboard/settings" className="flex items-center gap-2">
      <FaCircleArrowLeft className=" text-[#430750] w-8 h-8" />
      <p className=" font-semibold sm:text-[30px] text-xl">About Us</p>
    </Link>
    <div className='mt-4'>
      {/* <p dangerouslySetInnerHTML={{ __html: termsConditon?.data?.attributes?.termsText}}> 
      </p> */}
        {/* <div dangerouslySetInnerHTML={{ __html: termsConditon?.data?.attributes?.termsText }} /> */}
     
        <div className="mt-4">
          <p className="leading-7 mt-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Accusantium possimus reprehenderit maiores ut facere sed neque,
            omnis consectetur inventore temporibus. Labore reiciendis, optio
            quis a voluptas iure enim soluta veritatis earum? Magni harum
            distinctio fugit maiores molestiae? Dolorem corrupti exercitationem
            provident quae eaque assumenda aliquam aut voluptatibus? Ex tenetur
            quae rem omnis fugiat, dolores dignissimos fuga nobis magni. Harum
            maxime sunt eum ut odio minus similique, nobis magni inventore ex
            fugit ipsum vitae atque voluptatum, assumenda eos officiis
            consequuntur natus quaerat praesentium mollitia deleniti.
            Reprehenderit vitae magnam laborum nihil maiores, qui vero nemo nisi
            ex ad sunt nulla magni exercitationem explicabo corrupti perferendis
            eligendi tempora cupiditate ut aperiam numquam doloribus, officiis
            eos? Officia quaerat dignissimos tempore veritatis deleniti, ducimus
            sapiente sed voluptas, cum eveniet sint voluptates aperiam autem
            placeat quibusdam, dicta illum dolor animi aspernatur explicabo
            soluta iusto similique quos voluptatem? Consectetur, laboriosam
            fugiat. Qui quia placeat architecto! Et tenetur placeat laborum,
            optio saepe quidem. Sed, voluptatum numquam? Deserunt officiis ipsam
            doloremque rerum modi, deleniti ullam beatae nobis corrupti sit
            voluptatem! Itaque delectus perferendis omnis cum nemo, iure facere
            inventore nobis. At ipsa commodi mollitia maiores molestiae tempora,
            quod sunt quo voluptatem inventore minima debitis obcaecati?
            Voluptates dolorum placeat aut?
          </p>
          <p className="leading-7 mt-10">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Accusantium possimus reprehenderit maiores ut facere sed neque,
            omnis consectetur inventore temporibus. Labore reiciendis, optio
            quis a voluptas iure enim soluta veritatis earum? Magni harum
            distinctio fugit maiores molestiae? Dolorem corrupti exercitationem
            provident quae eaque assumenda aliquam aut voluptatibus? Ex tenetur
            quae rem omnis fugiat, dolores dignissimos fuga nobis magni. Harum
            maxime sunt eum ut odio minus similique, nobis magni inventore ex
            fugit ipsum vitae atque voluptatum, assumenda eos officiis
            consequuntur natus quaerat praesentium mollitia deleniti.
            Reprehenderit vitae magnam laborum nihil maiores, qui vero nemo nisi
            ex ad sunt nulla magni exercitationem explicabo corrupti perferendis
            eligendi tempora cupiditate ut aperiam numquam doloribus, officiis
            eos? Officia quaerat dignissimos tempore veritatis deleniti, ducimus
            sapiente sed voluptas, cum eveniet sint voluptates aperiam autem
            placeat quibusdam, dicta illum dolor animi aspernatur explicabo
            soluta iusto similique quos voluptatem? Consectetur, laboriosam
            fugiat. Qui quia placeat architecto! Et tenetur placeat laborum,
            optio saepe quidem. Sed, voluptatum numquam? Deserunt officiis ipsam
            doloremque rerum modi, deleniti ullam beatae nobis corrupti sit
            voluptatem! Itaque delectus perferendis omnis cum nemo, iure facere
            inventore nobis. At ipsa commodi mollitia maiores molestiae tempora,
            quod sunt quo voluptatem inventore minima debitis obcaecati?
            Voluptates dolorum placeat aut?
          </p>
        </div>
    </div>
    <div className=" text-right mt-16">
      <button onClick={() => navigate(`/dashboard/settings/editaboutus?id=temp`)}  className=" h-[44px] w-full sm:w-[260px] !text-white !bg-[#430750] rounded-[8px]">Edit</button>
      {/* <button onClick={() => navigate(`/dashboard/settings/edittermcondition/${termcondition?.data?.attributes?.docs[0]._id}`)}  className=" h-[44px] w-[260px] !text-black !bg-[#69C0BE] rounded-[8px]">Edit</button> */}
    </div>
  </div>
  )
}

import images from "../../public/images/logo.svg";

const StyledPage = () => (
  <nav class="bg-deepBlue">
    <div class="relative w-[1080px] mx-auto flex items-center justify-between">
      <a href="/" class="cursor-pointer py-7 pr-7 block">
        <img
          src="./images/logo.svg"
          width="125px"
          height="3 0px"
          loading="lazy"
          alt=""
        />
      </a>
      <ul class="flex space-x-6">
        <li
          class="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer
        transition-all duration-200 relative group "
        >
          <a href="#">Payments</a>
          <div
            class="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block
          transition-all duration-200"
          ></div>
        </li>
        <li
          class="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer
        transition-all duration-200 relative group "
        >
          <a href="#">Banking</a>
          <div
            class="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block
          transition-all duration-200"
          ></div>
        </li>
        <li
          class="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer
        transition-all duration-200 relative group "
        >
          <a href="#">Corporate card</a>
        </li>
        <li
          class="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer
        transition-all duration-200 relative group "
        >
          <a href="#">Payroll</a>
        </li>
        <li
          class="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer
        transition-all duration-200 relative group "
        >
          <a href="#">Resources</a>
          <div
            class="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block
          transition-all duration-200"
          ></div>
        </li>
        <li
          class="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer
        transition-all duration-200 relative group "
        >
          <a href="#">Support</a>
          <div
            class="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block
          transition-all duration-200"
          ></div>
        </li>
        <li
          class="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer
        transition-all duration-200 relative group "
        >
          <a href="#">Pricing</a>
          <div
            class="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block
          transition-all duration-200"
          ></div>
        </li>
      </ul>

{/* <!---buttons---> */}
      <div class="flex space-x-6 ">
        <img src="./images/india-flag.svg" width="28px" height="20px" alt="" />
        <button class="py-3 px-5 text-white  font-mullish border-lightBlue border-rounded-sm text-sm font-bold">
          Log in
        </button>
        <button class="py-3 px-4 font-mullish bg-white text-lightBlue300 border-rounded-sm text-sm hover:text-lightBlue500">
          Sign Up
        </button>
      </div>
    </div>
  </nav>
);
export default StyledPage;

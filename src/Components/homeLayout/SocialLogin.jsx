import React from "react";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Login With</h2>
      <div className="space-y-5">
        <button className="btn w-full btn-outline btn-secondary"><FcGoogle size={24} />Login with Google</button>
        <button className="btn w-full btn-outline btn-primary"><BsGithub size={24} />Login with Github</button>
      </div>
    </div>
  );
};

export default SocialLogin;

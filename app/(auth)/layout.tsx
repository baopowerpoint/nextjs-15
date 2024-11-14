import Image from "next/image";
import React from "react";

import SocialAuthForm from "@/components/form/SocialAuthForm";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-auth-light bg-cover bg-center bg-no-repeat px-4 py-5 dark:bg-auth-dark">
      <section className="light-border background-light800_dark200 shadow-light100_dark100 min-w-full border px-4 py-10 shadow-md sm:min-w-[520px] sm:px-8">
        <div className="flex items-center justify-between gap-2">
          <div className=" space-y-2">
            <h1 className="h2-bold text-dark100_light900">Join DevDlow</h1>
            <p className="paragraph-regular text-dark500_light400">
              To get your question answer
            </p>
          </div>
          <Image
            src="images/site-logo.svg"
            width={50}
            height={50}
            alt="Devflow logo"
            className="object-contain"
          />
        </div>
        {children}

        <SocialAuthForm />
      </section>
    </main>
  );
};

export default AuthLayout;

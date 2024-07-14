"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import type { NextPage } from "next";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";
import { sendTransaction, signMessage } from "~~/lib/dynamic";
import { isRegisteredIssuer, registerIssuer } from "~~/utils/scaffold-eth/contract";

const Home: NextPage = () => {
  const { primaryWallet, networkConfigurations } = useDynamicContext();
  const connectedAddress = primaryWallet?.address;
  const router = useRouter();

  useEffect(() => {
    const checkAndRegisterUser = async () => {
      if (connectedAddress) {
        const isRegistered = await isRegisteredIssuer(connectedAddress);
        if (!isRegistered) {
          await registerIssuer();
        }
        router.push("/signup");
      }
    };

    checkAndRegisterUser();
  }, [connectedAddress, router]);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <main className="flex flex-1 flex-col justify-center items-center">
          <section className="w-full pt-12 md:pt-24 lg:pt-32 animated-background">
            <div className="container mx-auto space-y-10 xl:space-y-16 px-4 md:px-6">
              <div className="grid gap-4 md:grid-cols-2 md:gap-16">
                <div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                    Mice: Secure Your Future
                  </h1>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    Mice leverages blockchain technology to create a secure and trusted environment for companies and
                    hackers to collaborate on security audits, applicable to both Web3 projects and traditional
                    businesses.
                  </p>
                  <div className="space-x-4 mt-6">
                    <Link
                      href="#"
                      className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 animated-button"
                      prefetch={false}
                    >
                      Get Started
                    </Link>
                    <Link
                      href="#"
                      className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
                <div className="flex justify-center">
                  <img
                    src="https://i.imgur.com/id96E4s.png"
                    width="550"
                    height="550"
                    alt="Hero"
                    className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full animated-image"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Secure Your Digital Assets</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Mice provides cutting-edge security features to protect your assets, including decentralized storage
                    and advanced authentication.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
                <div className="grid gap-1 text-center">
                  <div className="flex items-center justify-center gap-3">
                    <div className="rounded-full bg-primary p-2 text-primary-foreground">
                      <LockIcon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold">Secure Wallet</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Manage your digital assets with our secure, non-custodial wallet.
                  </p>
                </div>
                <div className="grid gap-1 text-center">
                  <div className="flex items-center justify-center gap-3">
                    <div className="rounded-full bg-primary p-2 text-primary-foreground">
                      <DatabaseIcon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold">Decentralized Storage</h3>
                  </div>
                  <p className="text-muted-foreground">Store your data securely on our decentralized network.</p>
                </div>
                <div className="grid gap-1 text-center">
                  <div className="flex items-center justify-center gap-3">
                    <div className="rounded-full bg-primary p-2 text-primary-foreground">
                      <KeyIcon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold">Advanced Authentication</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Protect your account with our multi-factor authentication system.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Trusted by Leaders</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Partnering with the Best</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Mice is trusted by leading Web3 projects and traditional businesses, ensuring the highest level of
                    security and reliability.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                <div className="flex items-center justify-center">
                  <img
                    src="https://static-00.iconduck.com/assets.00/binance-coin-cryptocurrency-icon-2048x2048-59p67eyq.png"
                    width="140"
                    height="70"
                    alt="Binance Logo"
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center animated-image"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <img
                    src="https://downloads.nethermind.io/images/nethermind_logo.png"
                    width="140"
                    height="70"
                    alt="Nethermind Logo"
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center animated-image"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <img
                    src="https://cryptologos.cc/logos/ethereum-name-service-ens-logo.png"
                    width="140"
                    height="70"
                    alt="ENS Logo"
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center animated-image"
                  />
                </div>
              </div>
              <div className="flex justify-center space-x-4">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 animated-button"
                  prefetch={false}
                >
                  Contact Sales
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Learn more
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Home;

function DatabaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}

function KeyIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4" />
      <path d="m21 2-9.6 9.6" />
      <circle cx="7.5" cy="15.5" r="5.5" />
    </svg>
  );
}

function LockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function ShieldIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

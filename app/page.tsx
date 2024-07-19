"use client";
import { useState } from "react";
import { LoginWindow } from "@/components/login-window";
import { useFarcasterIdentity } from "@/utils/use-farcaster-identity";
// import type { FarcasterUser } from "@/utils/types/farcaster-user";
import "./globals.css";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Page({}: {
  searchParams: Record<string, string>;
}): JSX.Element {
  const [open, setOpen] = useState(false);

  const { farcasterUser, loading, startFarcasterSignerProcess, logout } =
    useFarcasterIdentity();

  return (
    <div className="flex flex-col min-h-screen w-full sm:px-0 px-3 justify-center items-center gap-6 mb-6">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTitle className="text-4xl mb-11">CASTA</DialogTitle>
        <DialogTrigger asChild>
          <Button
            className="sm:w-[500px] w-full mt-4 bg-[#3384F7] rounded-2xl font-bold text-lg"
            variant="outline"
          >
            Connect to Warpcast
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] max-w-[375px]">
          {farcasterUser?.status === "approved" ? (
            <p>blabla</p>
          ) : (
            <LoginWindow
              farcasterUser={farcasterUser}
              loading={loading}
              startFarcasterSignerProcess={startFarcasterSignerProcess}
              logout={logout}
            ></LoginWindow>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

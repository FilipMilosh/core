import React from "react";
import { setupWalletSelector } from "@near-wallet-selector/core";
import { setupMyNearWallet } from "@near-wallet-selector/my-near-wallet";
import { Buffer } from "buffer";
import axios from "axios";
import { Login } from "../components/login/Login";
import { Footer } from "../components/footer/Footer";
import styled from "styled-components";

const fetchChallenge = async () => {
  const response = await axios.post("/admin-api/request-challenge");
  const payload = response.data;
  console.log("Challenge received:", payload.challenge);
  return payload.challenge;
};

const verifyOwner = async () => {
  let nonceBase64 = null;
  try {
    nonceBase64 = await fetchChallenge();
  } catch (e) {
    console.error("Failed to fetch challenge:", e);
    return;
  }
  const nonce = Buffer.from(nonceBase64, "base64");

  const selector = await setupWalletSelector({
    network: "testnet",
    modules: [setupMyNearWallet()],
  });
  const wallet = await selector.wallet("my-near-wallet");
  const callbackUrl = window.location.href + "/confirm-wallet";
  const message = "helloworld";
  const recipient = "me";
  console.log("Signing message:", {
    message,
    recipient,
    nonceBase64,
    callbackUrl,
  });
  await wallet.signMessage({ message, recipient, nonce, callbackUrl });
};

const BootstrapWrapper = styled.div`
  height: 150px;
`;

function Bootstrap() {
  return (
    <BootstrapWrapper>
      <Login verifyOwner={verifyOwner} />
      <Footer />
    </BootstrapWrapper>
  );
}

export default Bootstrap;

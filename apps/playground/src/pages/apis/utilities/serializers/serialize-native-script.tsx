import {
  deserializeAddress,
  NativeScript,
  serializeNativeScript,
} from "@meshsdk/core";

import LiveCodeDemo from "~/components/sections/live-code-demo";
import TwoColumnsScroll from "~/components/sections/two-columns-scroll";
import { demoAddresses } from "~/data/cardano";

export default function SerializeNativeScript() {
  return (
    <TwoColumnsScroll
      sidebarTo="serializeNativeScript"
      title="Serialize Native Script"
      leftSection={Left()}
      rightSection={Right()}
    />
  );
}

function Left() {
  return (
    <>
      <p>Serialize Native script into bech32 address.</p>
    </>
  );
}

function Right() {
  async function runDemo() {
    const { pubKeyHash: keyHash } = deserializeAddress(
      demoAddresses.testnetPayment,
    );

    const nativeScript: NativeScript = {
      type: "all",
      scripts: [
        {
          type: "before",
          slot: "99999999",
        },
        {
          type: "sig",
          keyHash: keyHash,
        },
      ],
    };

    const address = serializeNativeScript(nativeScript);

    return address;
  }

  let codeSnippet = ``;

  return (
    <LiveCodeDemo
      title="Serialize Native Script"
      subtitle="Serialize Native script into bech32 address"
      code={codeSnippet}
      runCodeFunction={runDemo}
    ></LiveCodeDemo>
  );
}

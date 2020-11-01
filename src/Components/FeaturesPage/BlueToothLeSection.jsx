import React from "react";
import FeatureContainer from "./../FeatureContainer";

export default function BlueToothLeSection() {
  return (
    <FeatureContainer
      odd
      featureTitle={"Bluetooth LE"}
      featureDescription={
        "We use revolutionary Bluetooth low energy technology which doesn't affect your battery life while maintaining a similar communication range."
      }
    />
  );
}

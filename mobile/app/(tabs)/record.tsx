import React, { useMemo, useRef, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type RunState = "idle" | "running" | "paused" | "finished";

export default function RecordScreen() {
  const [state, setState] = useState<RunState>("idle");

  // Mock metrics (static UI for now)
  const elapsed = "00:00:00";
  const distanceKm = "0.00";
  const paceAvg = "--";
  const calories = 0;
  const heartRate = 0;
  const speed = 0;

  const onPrimaryPress = () => {
    if (state === "idle") setState("running");
    else if (state === "running") setState("paused");
    else if (state === "paused") setState("running");
  };

  const onStopPress = () => setState("finished");

  const primaryConfig = useMemo(() => {
    if (state === "idle")
      return { label: "Start", color: "#22c55e", icon: "play" } as const;
    if (state === "running")
      return { label: "Pause", color: "#f59e0b", icon: "pause" } as const;
    if (state === "paused")
      return { label: "Resume", color: "#22c55e", icon: "play" } as const;
    return { label: "Start", color: "#22c55e", icon: "play" } as const;
  }, [state]);

  return (
    <View className="flex-1 bg-black">
      {/* Map placeholder (replace with MapView later) */}
      <View className="absolute inset-0 bg-neutral-900">
        <View className="absolute inset-0" />
        <View className="flex-1 items-center justify-center">
          <Ionicons name="map" size={72} color="#3f3f46" />
          <Text className="text-neutral-500 mt-2">Map placeholder</Text>
        </View>
      </View>

      {/* Floating top info bar */}
      <View
        className="absolute left-4 right-4 top-14 bg-black/60 rounded-2xl px-4 py-3 flex-row justify-between items-center"
        style={{ borderWidth: 1, borderColor: "#262626" }}
      >
        <View className="items-center">
          <Text className="text-neutral-400 text-2xs">Time</Text>
          <Text className="text-white text-lg font-bold">{elapsed}</Text>
        </View>
        <View className="w-[1px] h-8 bg-neutral-700/60" />
        <View className="items-center">
          <Text className="text-neutral-400 text-2xs">Distance</Text>
          <Text className="text-white text-lg font-bold">{distanceKm} km</Text>
        </View>
        <View className="w-[1px] h-8 bg-neutral-700/60" />
        <View className="items-center">
          <Text className="text-neutral-400 text-2xs">Avg pace</Text>
          <Text className="text-white text-lg font-bold">{paceAvg}</Text>
        </View>
      </View>

      {/* Center controls */}
      <View className="absolute left-0 right-0 bottom-28 items-center">
        <View className="flex-row items-center">
          {state !== "idle" && state !== "finished" && (
            <Pressable
              onPress={onStopPress}
              className="w-16 h-16 rounded-full bg-red-500 items-center justify-center mr-6"
              android_ripple={{ color: "#00000020", borderless: true }}
            >
              <Ionicons name="square" size={26} color="#fff" />
            </Pressable>
          )}

          <Pressable
            onPress={onPrimaryPress}
            className="w-24 h-24 rounded-full items-center justify-center"
            style={{ backgroundColor: primaryConfig.color }}
            android_ripple={{ color: "#00000020", borderless: true }}
          >
            <Ionicons name={primaryConfig.icon as any} size={36} color="#fff" />
            <Text className="text-white font-semibold mt-1">
              {primaryConfig.label}
            </Text>
          </Pressable>
        </View>
      </View>

      {/* Bottom status bar */}
      <View
        className="absolute left-0 right-0 bottom-0 px-5 py-3 bg-black/70 flex-row justify-between items-center"
        style={{ borderTopWidth: 1, borderTopColor: "#262626" }}
      >
        <View className="items-center">
          <Text className="text-neutral-400 text-2xs">Calories</Text>
          <Text className="text-white text-base font-semibold">
            {calories} kcal
          </Text>
        </View>
        <View className="items-center">
          <Text className="text-neutral-400 text-2xs">Heart</Text>
          <Text className="text-white text-base font-semibold">
            {heartRate} bpm
          </Text>
        </View>
        <View className="items-center">
          <Text className="text-neutral-400 text-2xs">Speed</Text>
          <Text className="text-white text-base font-semibold">
            {speed} km/h
          </Text>
        </View>
      </View>
    </View>
  );
}

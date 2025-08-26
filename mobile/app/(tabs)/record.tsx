import React, { useState, useEffect, useRef } from "react";
import { View, Text, Pressable, StatusBar, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MapView, { Polyline, PROVIDER_GOOGLE } from "react-native-maps";
import { useTheme } from "@/contexts/ThemeContext";

type RunState = "idle" | "running" | "paused" | "finished";

interface RunningStats {
  time: number; // seconds
  distance: number; // meters
  calories: number;
  heartRate: number;
  currentSpeed: number; // km/h
}

// Mock route data (Ho Chi Minh City area)
const mockRouteCoordinates = [
  { latitude: 10.7829, longitude: 106.6955 },
  { latitude: 10.7834, longitude: 106.6958 },
  { latitude: 10.7839, longitude: 106.6962 },
  { latitude: 10.7845, longitude: 106.6965 },
  { latitude: 10.7851, longitude: 106.6969 },
  { latitude: 10.7856, longitude: 106.6973 },
  { latitude: 10.7862, longitude: 106.6977 },
  { latitude: 10.7868, longitude: 106.6982 },
  { latitude: 10.7874, longitude: 106.6987 },
  { latitude: 10.788, longitude: 106.6992 },
];

const { width: screenWidth } = Dimensions.get("window");

export default function RecordScreen() {
  const { isDark } = useTheme();
  const [runState, setRunState] = useState<RunState>("idle");
  const [stats, setStats] = useState<RunningStats>({
    time: 0,
    distance: 0,
    calories: 0,
    heartRate: 0,
    currentSpeed: 0,
  });

  const [visibleRoute, setVisibleRoute] = useState<typeof mockRouteCoordinates>(
    []
  );
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const mapRef = useRef<MapView>(null);

  // Format time from seconds to HH:MM:SS
  const formatTime = (seconds: number): string => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Calculate pace (minutes per km)
  const calculatePace = (
    timeSeconds: number,
    distanceMeters: number
  ): string => {
    if (distanceMeters === 0) return "--'--";
    const paceMinutesPerKm = timeSeconds / 60 / (distanceMeters / 1000);
    const minutes = Math.floor(paceMinutesPerKm);
    const seconds = Math.floor((paceMinutesPerKm - minutes) * 60);
    return `${minutes}'${seconds.toString().padStart(2, "0")}"`;
  };

  // Start/Update timer and stats
  useEffect(() => {
    if (runState === "running") {
      intervalRef.current = setInterval(() => {
        setStats((prevStats) => {
          const newTime = prevStats.time + 1;
          const newDistance = Math.min(prevStats.distance + 2, 3200); // Simulate 2m per second
          const newCalories = Math.floor(newTime * 0.064); // ~230 kcal for 1 hour
          const newHeartRate = 135 + Math.floor(Math.random() * 20); // 135-155 bpm
          const newSpeed = 10 + Math.random() * 4; // 10-14 km/h

          // Update visible route based on distance
          const routeProgress = Math.min(newDistance / 3200, 1);
          const visiblePoints = Math.floor(
            routeProgress * mockRouteCoordinates.length
          );
          setVisibleRoute(mockRouteCoordinates.slice(0, visiblePoints + 1));

          return {
            time: newTime,
            distance: newDistance,
            calories: newCalories,
            heartRate: newHeartRate,
            currentSpeed: newSpeed,
          };
        });
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [runState]);

  const handleStartPause = () => {
    if (runState === "idle") {
      setRunState("running");
    } else if (runState === "running") {
      setRunState("paused");
    } else if (runState === "paused") {
      setRunState("running");
    }
  };

  const handleStop = () => {
    setRunState("finished");
    // Reset stats for demo
    setTimeout(() => {
      setRunState("idle");
      setStats({
        time: 0,
        distance: 0,
        calories: 0,
        heartRate: 0,
        currentSpeed: 0,
      });
      setVisibleRoute([]);
    }, 3000);
  };

  const getButtonConfig = () => {
    switch (runState) {
      case "idle":
        return {
          label: "Start",
          icon: "play" as const,
          color: "#22c55e",
        };
      case "running":
        return {
          label: "Pause",
          icon: "pause" as const,
          color: "#f59e0b",
        };
      case "paused":
        return {
          label: "Resume",
          icon: "play" as const,
          color: "#22c55e",
        };
      case "finished":
        return {
          label: "Finished",
          icon: "checkmark" as const,
          color: "#ef4444",
        };
    }
  };

  const buttonConfig = getButtonConfig();

  return (
    <View className="flex-1">
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {/* Map */}
      <MapView
        ref={mapRef}
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 10.7829,
          longitude: 106.6955,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        mapType="standard"
        showsUserLocation={true}
        showsMyLocationButton={false}
        showsCompass={false}
        showsTraffic={false}
        customMapStyle={isDark ? darkMapStyle : []}
      >
        {/* Running route polyline */}
        {visibleRoute.length > 1 && (
          <Polyline
            coordinates={visibleRoute}
            strokeColor="#3b82f6"
            strokeWidth={6}
            lineCap="round"
            lineJoin="round"
          />
        )}
      </MapView>

      {/* Floating Top Info Bar */}
      <View
        className="absolute left-4 right-4 top-16 rounded-2xl p-4 flex-row justify-between items-center"
        style={{
          backgroundColor: isDark ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.6)",
          backdropFilter: "blur(10px)",
        }}
      >
        <View className="items-center flex-1">
          <Text className="text-white/70 text-xs font-medium mb-1">TIME</Text>
          <Text className="text-white text-lg font-bold">
            {formatTime(stats.time)}
          </Text>
        </View>

        <View className="w-px h-8 bg-white/20 mx-3" />

        <View className="items-center flex-1">
          <Text className="text-white/70 text-xs font-medium mb-1">
            DISTANCE
          </Text>
          <Text className="text-white text-lg font-bold">
            {(stats.distance / 1000).toFixed(2)} km
          </Text>
        </View>

        <View className="w-px h-8 bg-white/20 mx-3" />

        <View className="items-center flex-1">
          <Text className="text-white/70 text-xs font-medium mb-1">
            AVG PACE
          </Text>
          <Text className="text-white text-lg font-bold">
            {calculatePace(stats.time, stats.distance)}/km
          </Text>
        </View>
      </View>

      {/* Control Buttons */}
      <View className="absolute left-0 right-0 bottom-32 items-center">
        <View className="flex-row items-center">
          {/* Stop Button */}
          {(runState === "running" || runState === "paused") && (
            <Pressable
              onPress={handleStop}
              className="w-16 h-16 rounded-full bg-red-500 items-center justify-center mr-8 shadow-lg"
              style={({ pressed }) => ({
                opacity: pressed ? 0.8 : 1,
                transform: [{ scale: pressed ? 0.95 : 1 }],
              })}
            >
              <Ionicons name="stop" size={28} color="white" />
            </Pressable>
          )}

          {/* Main Control Button */}
          <Pressable
            onPress={handleStartPause}
            disabled={runState === "finished"}
            className="w-24 h-24 rounded-full items-center justify-center shadow-2xl"
            style={({ pressed }) => ({
              backgroundColor: buttonConfig.color,
              opacity: pressed ? 0.8 : 1,
              transform: [{ scale: pressed ? 0.95 : 1 }],
            })}
          >
            <Ionicons name={buttonConfig.icon} size={36} color="white" />
            <Text className="text-white text-sm font-semibold mt-1">
              {buttonConfig.label}
            </Text>
          </Pressable>
        </View>
      </View>

      {/* Bottom Status Bar */}
      <View
        className="absolute left-0 right-0 bottom-0 px-6 py-4 flex-row justify-between items-center"
        style={{
          backgroundColor: isDark ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.6)",
          backdropFilter: "blur(10px)",
        }}
      >
        <View className="items-center flex-1">
          <View className="flex-row items-center mb-1">
            <Ionicons name="flame" size={16} color="#f97316" />
            <Text className="text-white/70 text-xs font-medium ml-1">
              CALORIES
            </Text>
          </View>
          <Text className="text-white text-base font-bold">
            {stats.calories} kcal
          </Text>
        </View>

        <View className="items-center flex-1">
          <View className="flex-row items-center mb-1">
            <Ionicons name="heart" size={16} color="#ef4444" />
            <Text className="text-white/70 text-xs font-medium ml-1">
              HEART
            </Text>
          </View>
          <Text className="text-white text-base font-bold">
            {stats.heartRate} bpm
          </Text>
        </View>

        <View className="items-center flex-1">
          <View className="flex-row items-center mb-1">
            <Ionicons name="speedometer" size={16} color="#3b82f6" />
            <Text className="text-white/70 text-xs font-medium ml-1">
              SPEED
            </Text>
          </View>
          <Text className="text-white text-base font-bold">
            {stats.currentSpeed.toFixed(1)} km/h
          </Text>
        </View>
      </View>
    </View>
  );
}

// Dark mode map style
const darkMapStyle = [
  {
    elementType: "geometry",
    stylers: [{ color: "#242f3e" }],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [{ color: "#242f3e" }],
  },
  {
    elementType: "labels.text.fill",
    stylers: [{ color: "#746855" }],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#263c3f" }],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: "#6b9a76" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#38414e" }],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#212a37" }],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9ca5b3" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#746855" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#1f2835" }],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [{ color: "#f3d19c" }],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#2f3948" }],
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#17263c" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#515c6d" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [{ color: "#17263c" }],
  },
];

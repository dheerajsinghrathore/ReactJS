import { useState } from "react";
import { View, Text, Button } from "react-native";

export default function CounterScreen() {
  const [count, setCount] = useState(0);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24 }}>Count: {count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
    </View>
  );
}

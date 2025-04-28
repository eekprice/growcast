import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { testNotionConnection } from './notionTest';

export default function App() {
  const [result, setResult] = useState(null);

  useEffect(() => {
    testNotionConnection().then(setResult);
  }, []);

  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-xl font-bold mb-4 text-blue-600">Notion Test Result</Text>
      <Text selectable className="font-mono text-base text-gray-800">
        {result ? JSON.stringify(result, null, 2) : "Loading..."}
      </Text>
    </ScrollView>
  );
}

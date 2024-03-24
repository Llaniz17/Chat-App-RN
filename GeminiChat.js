import React, { useState, useEffect } from "react";
import * as GoogleGenerativeAI from "@google/generative-ai";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import * as Speech from "expo-speech";
import { FontAwesome } from "@expo/vector-icons";

const GeminiChat = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const API_KEY = "TU_CLAVE_DE_API_AQUI";

  useEffect(() => {
    const startChat = async () => {
      const genAI = new GoogleGenerativeAI.GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const prompt = "hola! ";
      const result = await model.generateContent(prompt);
      const response = result.response;
      const text = response.text();
      console.log(text);
      setMessages([
        {
          text,
          user: false,
        },
      ]);
    };
    startChat();
  }, []);

  const sendMessage = async () => {
    setLoading(true);
    const userMessage = { text: userInput, user: true };
    const updatedMessages = [...messages, userMessage]; 
    setMessages(updatedMessages);

    const genAI = new GoogleGenerativeAI.GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = userMessage.text;
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    
    const botMessage = { text, user: false }; 
    setMessages([...updatedMessages, botMessage]); 
    setLoading(false);
    setUserInput("");

    if (text) {
      Speech.speak(text);
    }
  };

  const toggleSpeech = () => {
    // setIsSpeaking(!isSpeaking);
    console.log("isSpeaking", isSpeaking);
  };

  const renderMessage = ({ item }) => (
    <View
      style={[
        styles.messageContainer,
        item.user ? styles.userMessageContainer : styles.botMessageContainer,
        item.user ? styles.userMessageContainerRight : styles.botMessageContainerLeft,
      ]}
    >
      <Text
        style={[
          styles.messageText,
          item.user ? styles.userMessageText : styles.botMessageText,
        ]}
      >
        {item.text}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chat App con Gemini</Text>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item, index) => index.toString()} 
      />
      <View style={styles.inputContainer}>
        {/* microphone icon */}
        <TouchableOpacity style={styles.micIcon} onPress={toggleSpeech}>
          <FontAwesome
            name="microphone"
            size={24}
            color="black"
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </TouchableOpacity>
        <TextInput
          placeholder="Escribe tu mensaje"
          onChangeText={setUserInput}
          value={userInput}
          onSubmitEditing={sendMessage}
          style={styles.input}
          placeholderTextColor="black"
        />
        {loading && <ActivityIndicator size="small" color="black" />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ffff", marginTop: 50 },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 10 },
  messageContainer: {
    padding: 10,
    marginVertical: 5,
    maxWidth: "80%",
    borderRadius: 8,
    marginLeft: 10,
    marginRight: 5,
  },
  botMessageContainer: { backgroundColor: "#dbe3ea" },
  userMessageContainer: { backgroundColor: "#3c3e40" },
  botMessageContainerLeft: { alignSelf: 'flex-start' },
  userMessageContainerRight: { alignSelf: 'flex-end' },
  messageText: { fontSize: 16, marginLeft: 1 },
  userMessageText: { color: "white" },
  botMessageText: { color: "black" },
  inputContainer: { flexDirection: "row", alignItems: "center", padding: 10 },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: "#dbe3ea",
    borderRadius: 10,
    height: 50,
  },
  micIcon: {
    padding: 10,
    backgroundColor: "#dbe3ea",
    borderRadius: 25,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
});

export default GeminiChat;


